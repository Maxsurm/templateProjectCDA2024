import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  mail: string = "";
  password: string = "";

  constructor() {
  }
  handleSubmit(valid: boolean) {
    if (valid) {
      console.log({mail: this.mail, password: this.password})
    }
  }
}
