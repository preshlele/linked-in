import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../../features/auth/auth-service.service';
import { Component, DestroyRef, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { take } from 'rxjs';
@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrl: '../styles/pages.styles.scss',
})
export class LoginPageComponent {
    private _toast = inject(NgToastService);
    public logoIcon:string = 'assets/images/linkedIn-logo.png';
    destroyRef = inject(DestroyRef);
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
            this.AuthService.login(this.loginForm.value).pipe(take(1))
                .subscribe({
                    next: (data) => {
                        this.router.navigate(['/home']);
                        localStorage.setItem('login_token', data?.login_token);
                        localStorage.setItem('refresh_token', data?.refresh_token);
                        this._toast.success(data.message, 'SUCCESS', 5000);
                        this.loginForm.reset();
                    },
                    error: (err: HttpErrorResponse) => {
                        if (err.status === 400 || err.status === 401 || err.status === 501) {
                            this._toast.danger(err.error.error, 'ERROR', 5000);
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
