import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { catchError, Observable, switchMap, take, throwError } from 'rxjs';
import { AuthService } from '../features/auth/auth-service.service';
import { inject } from '@angular/core';

export const refreshInterceptor: HttpInterceptorFn = (
    req: HttpRequest<unknown>,
    next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
    const authService = inject(AuthService);

    return next(req).pipe(
        catchError((err) => {
            if (err.status === 401 && !authService.isRefreshing()) {
                return authService.refreshToken().pipe(
                    switchMap((data) => {
                        if (data && data.login_token) {
                            const newAuthReq = req.clone({
                                setHeaders: {
                                    Authorization: `Bearer ${data.login_token}`,
                                },
                            });
                            return next(newAuthReq);
                        } else {
                            authService.logout();
                            return next(req);
                        }
                    }),
                    catchError((refreshErr) => {
                        authService.logout();
                        return throwError(() => refreshErr);
                    }),
                );
            }
            return throwError(() => err);
        }),
    );
};
