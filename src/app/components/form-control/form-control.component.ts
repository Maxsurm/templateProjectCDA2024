import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent {

  titre: FormControl = new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(50)]);

  onSubmit() {
    if(this.titre.valid)
    console.log("Titre : ", this.titre.value)
  }

  get invalid() {
    return this.titre.touched && this.titre.invalid
  }
}
