import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appTaskIdValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: TaskIdValidatorDirective, multi: true}]
})
export class TaskIdValidatorDirective implements Validator {
  validate(control: AbstractControl) {
    const valid = (new RegExp('^((\\d{4})|(LT-\\d{4})){1}$', 'gi')).test(control.value);
    if (!valid) {
      return {'NaN': {value: control.value}};
    }
    return null;
  }
}
