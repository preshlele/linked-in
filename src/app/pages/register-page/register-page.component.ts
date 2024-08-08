import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../utils/emailValidator';
import { AuthService } from '../../features/auth/auth-service.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrl: '../styles/pages.styles.scss',
})
export class RegisterPageComponent {
    constructor(
        private authService: AuthService,
        private router: Router,
        private fb: FormBuilder,
    ) {}

    registerForm = this.fb.group({
        email: ['', [Validators.required, emailValidator()]],
        first_name: ['John', Validators.required],
        last_name: ['Doe', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8)]],
    });

    onSubmit(): void {
        if (this.registerForm.valid) {
            this.authService.signup(this.registerForm.value).subscribe({
                next: (data) => {
                  console.log(data.message);
                    this.router.navigate(['/login']);
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
                // complete: () => console.log('User Registered Successfully'),
            });
        }
    }
    get email() {
        return this.registerForm.get('email');
    }

    get password() {
        return this.registerForm.get('password');
    }
}
