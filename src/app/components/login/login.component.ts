import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  host: {
    ngSkipHydration: 'true',
  },
})
export class LoginComponent implements OnInit {
  loginFormGroup = new UntypedFormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  isSubmitted = false;
  msg = '';

  constructor(@Inject(AuthService) private authService: AuthService) {}

  ngOnInit(): void {}

  get loginForm() {
    return this.loginFormGroup.controls;
  }

  /**
   * Executes auth service login method to perform user login.
   * @returns {void}
   */
  onSubmit(): void {
    this.msg = '';
    if (this.loginFormGroup.valid) {
      this.isSubmitted = true;
      this.authService
        .login({
          email: this.loginFormGroup.get('email')?.value,
          password: this.loginFormGroup.get('password')?.value,
        })
        .subscribe({
          next: (response) => {
            this.isSubmitted = false;
            console.log('response', response);
            this.msg = response?.['msg'];
          },
          error: (error: HttpErrorResponse) => {
            this.msg = error.message;
            this.isSubmitted = false;
            console.log('error', error);
          },
        });
    }
  }
}
