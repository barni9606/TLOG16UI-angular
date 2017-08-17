import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appTimeValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: TimeValidatorDirective, multi: true}]
})
export class TimeValidatorDirective implements Validator {
  validate(control: AbstractControl) {
    const valid = (new RegExp('^\\d{2}:\\d{2}$', 'gi')).test(control.value);
    if (!valid) {
      return {'NaN': {value: control.value}};
    }
    const hour = parseInt(control.value.split(':')[0], 10);
    const minute = parseInt(control.value.split(':')[1], 10);
    if (hour >= 0 && hour < 24 && minute >= 0 && minute < 60) {
      return null;
    }
    return {'NotTime': {value: control.value}};
  }
}
