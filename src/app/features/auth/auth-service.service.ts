import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginData, LoginDataResponse, RegisterData, RegisterDataResponse } from '../../interfaces/model';
import { Observable } from 'rxjs';

type partialRegisterData = Partial<RegisterData>;
type partialLoginData = Partial<LoginData>;
@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private apiUrl: string = environment.apiUrl;
    private apiKey: string = environment.apiKey;

    constructor(private http: HttpClient) {}

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

    isAuthenticated(): boolean {
        return !!localStorage.getItem('login_token');
    }
}
