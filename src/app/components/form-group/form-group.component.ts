import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getFormControl, hasControlError, isControlInvalid } from 'src/app/tools/reactive-form-tools';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent {

  form: FormGroup = new FormGroup({
    id: new FormControl(0),
    imageSrc: new FormControl(""),
    imageAlt: new FormControl("Image Alt", [Validators.required]),
    titre: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(50)]),
    description: new FormControl("", [Validators.required]),
    postLink: new FormControl("#", [Validators.required])
  });

  onSubmit() {
    if(this.form.valid) {
      console.log("Article : ", this.form.value)
    }
  }

  get jsonValue() {
    return JSON.stringify(this.form.value)
  }

  get titre() {
    return this.form.get('titre')
  }

  get titreInvalid() {
    return this.titre?.touched && this.titre?.invalid
  }

  getControl(name: string) {
    return getFormControl(this.form, name)
  }

  isControlInvalid(name: string) {
    return isControlInvalid(this.getControl(name))
  }

  hasError(name: string, errorCode: string) {
    return hasControlError(this.getControl(name), errorCode)
  }
}
