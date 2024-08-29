import {
    HttpEvent,
    HttpHandler,
    HttpHandlerFn,
    HttpInterceptorFn,
    HttpRequest,
    HttpResponse,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { LoadingService } from '../features/@common/Services/Loading/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (
    req: HttpRequest<unknown>,
    next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
    const _loading = inject(LoadingService);

    _loading.setLoading(true, req.url); //start loading before req

    return next(req).pipe(
        map<HttpEvent<unknown>, HttpEvent<unknown>>((event) => {
            if (event instanceof HttpResponse) {
                _loading.setLoading(false, req.url);
            }
            return event;
        }),
        catchError((err) => {
            _loading.setLoading(false, req.url);
            return throwError(() => err);
        }),
    );
};
