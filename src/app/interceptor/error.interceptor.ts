import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { catchError, Observable, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (
    req: HttpRequest<unknown>,
    next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
    const _toast = inject(NgToastService);

    return next(req).pipe(
        catchError((err: HttpErrorResponse) => {
            if (err.status === 401 || err.status === 403 || err.status === 400 || err.status === 500) {
                _toast.danger(err.error.error || err.error.message|| err.error.error, ' Please try again.', 5000);
            } else {
                _toast.danger('An unexpected error occurred.', 'ERROR', 5000);
            }
            return throwError(() => err); // Ensure the error is re-thrown
        }),
    );
};
