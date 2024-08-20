import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginData, LoginDataResponse, RegisterData, RegisterDataResponse, User } from '../../interfaces/model';
import { Observable, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

type partialRegisterData = Partial<RegisterData>;
type partialLoginData = Partial<LoginData>;

@Injectable({
    providedIn: 'root',
})
export class AuthService {
     token = localStorage.getItem('login_token');
     _refreshToken = localStorage.getItem('refresh_token');
    private apiUrl: string = environment.apiUrl;
    private apiKey: string = environment.apiKey;

    constructor(private http: HttpClient, private router: Router) {}

    signup(formData: partialRegisterData): Observable<RegisterDataResponse> {
        const data: RegisterData = {
            email: formData.email!,
            first_name: formData.first_name!,
            last_name: formData.last_name!,
            password: formData.password!,
        };
        const headers = new HttpHeaders({
            'X-APN': this.apiKey,
            'Content-Type': 'application/json',
        });

        return this.http.post<RegisterDataResponse>(`${this.apiUrl}user/signup`, data, { headers });
    }

    login(formData: partialLoginData): Observable<LoginDataResponse> {
        const data: LoginData = {
            email: formData.email!,
            password: formData.password!,
        };
        const headers = new HttpHeaders({
            'X-APN': this.apiKey,
            'Content-Type': 'application/json',
        });

        return this.http.post<LoginDataResponse>(`${this.apiUrl}user/login`, data, { headers });
    }

    refreshToken(): Observable<LoginDataResponse> {
        const headers = new HttpHeaders({
            'X-APN': this.apiKey,
            'Content-Type': 'application/json',
        });
        return this.http.post<LoginDataResponse>(`${this.apiUrl}user/refresh-token`, {refresh_token: this._refreshToken}, { headers }).pipe(tap((data) => {
            localStorage.setItem('login_token', data.login_token);
        }));
    }

    validateUser(): Observable<any> {
        const headers = new HttpHeaders({
            'X-APN': this.apiKey,
            'Content-Type': 'application/json',
        });

        return this.http.get(`${this.apiUrl}user/validate`, { headers });
    }

    isAuthenticated(): boolean {
        return !!this.token;
    }

    getUserData(): User | null {
        return this.token ? jwtDecode(this.token) : null;
    }

    logout(): void {
        localStorage.removeItem('login_token');
        localStorage.removeItem('refresh_token');
        this.router.navigate(['/login']);
    }


}
