import {
  AbstractControl,
  FormGroup,
  UntypedFormGroup,
  ValidationErrors,
  ValidatorFn,
  ReactiveFormsModule,
} from '@angular/forms';

export const ConfirmPassword = (
  control1: string,
  control2: string
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    
    const passwordControl = control.get(control1);
    const confirmPasswordControl = control.get(control2);
    if (control.get(control1)?.value != control.get(control2)?.value) {      
      passwordControl?.setErrors({ passwordMismatch: true });
      confirmPasswordControl?.setErrors({ passwordMismatch: true });
    } else {
      passwordControl?.setErrors(null);
      confirmPasswordControl?.setErrors(null);
    }
    return null;
  };
};
