import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { inject } from '@angular/core';
import { AuthService } from '../features/auth/auth-service.service';

export const rapidApiInterceptor: HttpInterceptorFn = (
    req: HttpRequest<unknown>,
    next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
    const apiUrl = environment.rapidApiUrl;
    const authService = inject(AuthService);

    if (req.url.startsWith(apiUrl)) {
        return authService.validateUser().pipe(
            switchMap(() => {
                const authReq = req.clone({
                    setHeaders: {
                        'x-rapidapi-key': environment.rapidApiKey,
                        'x-rapidapi-host': environment.rapidApiHost,
                    },
                });
                return next(authReq);
            }),
            catchError((err) => throwError(() => err)),
        );
    }
    return next(req);
};
