import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appRequiredMin]',
  providers: [{provide: NG_VALIDATORS, useExisting: RequiredMinValidatorDirective, multi: true}]
})
export class RequiredMinValidatorDirective implements Validator {
  validate(control: AbstractControl) {
      const valid = (new RegExp('^\\d{2,}$', 'gi')).test(control.value);
      console.log(valid);
      if (!valid) {
        console.log({'NaN': {value: control.value}});
        return {'NaN': {value: control.value}};
      }
      if (control.value < 0 || control.value >= 1440) {
        console.log({'valueIsOff': {value: control.value}});
        return {'valueIsOff': {value: control.value}};
      }
      console.log(control.value);
      return null;
  }
}
