import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../../features/auth/auth-service.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrl: '../styles/pages.styles.scss',
})
export class LoginPageComponent {
    constructor(
        private AuthService: AuthService,
        private router: Router,
        private fb: FormBuilder,
    ) {}

    loginForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
    });

    onSubmit(): void {
        if (this.loginForm.valid) {
            this.AuthService.login(this.loginForm.value).subscribe({
                next: (data) => {
                    this.loginForm.reset();
                    localStorage.setItem('login_token', data?.login_token);
                    this.router.navigate(['/home']);
                },
                error: (err: HttpErrorResponse) => {
                    if (err.status === 400) {
                        console.log('bad request');
                    } else if (err.status === 500) {
                        console.log('server error');
                    } else if (err.status === 401) {
                        console.log('unauthorized');
                    }
                },
            });
        }
    }

    get email() {
        return this.loginForm.get('username');
    }

    get password() {
        return this.loginForm.get('password');
    }
}
