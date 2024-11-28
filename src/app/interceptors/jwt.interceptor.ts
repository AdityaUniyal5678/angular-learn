import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService?.getToken();

  if (token) {
    req.clone({
      headers: new HttpHeaders().append('Authorization', `Bearer ${token}`),
    });
  }

  return next(req);
};
