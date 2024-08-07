import { ValidationErrors, ValidatorFn } from '@angular/forms';

export function emailValidator(): ValidatorFn {
    return (control): ValidationErrors | null => {
        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        const isValid = emailPattern.test(control.value);
        return isValid ? null : { email: true };
    };
}
