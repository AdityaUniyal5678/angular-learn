import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ConfirmPassword } from '../../validators/confirm-password.validator';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(@Inject(UserService) private userService: UserService) {} // private userService: UserService
  userDetailsFormGroup: UntypedFormGroup = new UntypedFormGroup(
    {
      first_name: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-z]+$/),
      ]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl(18, [Validators.required, Validators.min(18)]),
      password: new FormControl('', [Validators.required]),
      confirm_password: new FormControl('', [Validators.required]),
    },
    {
      validators: ConfirmPassword('password', 'confirm_password'),
    }
  );

  get UserData() {
    return this.userDetailsFormGroup.controls;
  }

  onSubmit(): void {
    if (this.userDetailsFormGroup.valid) {
      // Call API to submit user details
      this.userService
        .createNewUser(this.userDetailsFormGroup.value)
        .subscribe({
          next: (res) => {
            console.log('Response from createNewUser API', res);
          },
          error: (error) => {
            console.log('error from API', error);
          },
        });
      this.userDetailsFormGroup.reset();
    }
  }
}
