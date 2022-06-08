import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function MustMatch(controlName: any, matchingControlName: any) {
  return (formGroup: FormGroup) => {
    const control = formGroup.get(controlName);
    const controlValue = formGroup.get(controlName)?.value;
    const matchingControl = formGroup.get(matchingControlName);
    const matchingControlValue = formGroup.get(matchingControlName)?.value;
      // set error on matchingControl if validation fails
      if (controlValue !== matchingControlValue) {
        matchingControl.setErrors({ mustMatch: true });
        return { mustMatch: true };
      } else {
       return null;
      }
  }
}
