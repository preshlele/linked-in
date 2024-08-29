import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';

export const cachingInterceptor: HttpInterceptorFn = (
    req: HttpRequest<unknown>,
    next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
    const _cache = new Map<string, any>();

    if (req.method !== 'GET' && req.method !== 'POST') {
        return next(req);
    }

    // check cache
    const cachedResponse = _cache.get(req.urlWithParams);
    if (cachedResponse) {
        return of(cachedResponse);
    }

    return next(req).pipe(
        map<HttpEvent<unknown>, HttpEvent<unknown>>((event) => {
            console.log('caching');
            if (event instanceof HttpResponse) {
                _cache.set(req.urlWithParams, event);
            }
            return event;
        }),
    );
};
