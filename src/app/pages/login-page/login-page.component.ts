import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrl: '../styles/pages.styles.scss',
})
export class LoginPageComponent {
    constructor() {}

    loginForm = new FormGroup({
        username: new FormControl('',[ Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
    });

    onSubmit(): void {
        // console.log(this.loginForm.value, 'login values');
    }

    get userName() {
        return this.loginForm.get('username');
    }

    get password() {    
        return this.loginForm.get('password');
    }
}
