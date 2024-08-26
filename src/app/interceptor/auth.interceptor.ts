import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export const authInterceptor: HttpInterceptorFn = (
    req: HttpRequest<unknown>,
    next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
    const token = localStorage.getItem('login_token');
    const apiUrl = `${environment.authUrl}`;

    if (req.url.startsWith(apiUrl)) {
        const authReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
                'X-APN': environment.authApiKey,
            },
        });
        return next(authReq);
    }

    return next(req);
};
