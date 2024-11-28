import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);
  if (userService.isUserLoggedIn()) {
    router.navigate(['home']);
  } else {
    router.navigate(['login']);
  }

  return false;
};
