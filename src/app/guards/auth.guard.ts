import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from 'express';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if(!authService.isAuthenticated()) {
    router.navigate(['/']);
    return false;
  } else {
    return true;
  }
  //return authService.isLoggedIn();
};
