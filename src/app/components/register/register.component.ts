import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
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

  constructor(private router: Router, private service: AuthService) {
  }

  handleSubmit() {
    // Toujours en premier
    if(this.form.valid) {
      this.service.register(this.form.value)
      .subscribe({
        next: () => this.router.navigate(['/auth', {outlets: {'authOutlet' : 'login'}}])
      })
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
