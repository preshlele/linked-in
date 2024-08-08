import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../features/auth/auth-service.service';

export const authGuard: CanActivateFn = async () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const loggedIn = authService.isAuthenticated();

    if (loggedIn) {
        return true;
    }
    return router.navigate(['/login']);
};
