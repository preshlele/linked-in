import { Component, DestroyRef, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../utils/emailValidator';
import { AuthService } from '../../features/auth/auth-service.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { take } from 'rxjs';

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrl: '../styles/pages.styles.scss',
})
export class RegisterPageComponent {
    private _toast = inject(NgToastService);
    destroyRef = inject(DestroyRef);
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
            this.authService
                .signup(this.registerForm.value)
                .pipe(take(1))
                .subscribe({
                    next: (data) => {
                        this._toast.success(data.message, 'SUCCESS', 5000);
                        this.router.navigate(['/login']);
                    },
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
