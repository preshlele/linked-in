import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../../utils/emailValidator';

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {
  constructor() {}

    registerForm = new FormGroup({
        username: new FormControl('', [Validators.required, emailValidator()]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });

    onSubmit(): void {
        console.log(this.registerForm.value)
        this.registerForm.reset()
    }

  }
