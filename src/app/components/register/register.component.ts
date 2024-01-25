import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { getFormControl, hasControlError, isControlInvalid, mustMatch } from 'src/app/tools/reactive-form-tools';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  visible: boolean = false;

  password: FormControl = new FormControl('', [Validators.required, Validators.minLength(8)])
  confirmPassword: FormControl = new FormControl('', [Validators.required, mustMatch(this.password)])
  form : FormGroup = new FormGroup<any>({
    username:   new FormControl('', [Validators.required]),
    email:      new FormControl('', [Validators.required, Validators.email]),
    password:   this.password
  })

  constructor() {
  }

  handleSubmit() {
    // Toujours en premier
    if(this.form.valid) {
      console.log(this.form.value)
    }
  }

  getControl(name: string) {
    return getFormControl(this.form, name)
  }

  isInvalid(name: string) {
    return isControlInvalid(this.getControl(name))
  }

  hasError(name: string, errorCode: string) {
    return hasControlError(this.getControl(name), errorCode)
  }

  hasControlError = hasControlError

  dontMatch() {
    return hasControlError(this.confirmPassword, 'mustmatch')
  }
}
