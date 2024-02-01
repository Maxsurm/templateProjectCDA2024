import { Component } from '@angular/core';
import {MiniPost} from "../minipost/minipost.component";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  open: boolean = false

  href : string = "#"
  src: string = "pic07.jpg"
  alt?: string;
  description: string = "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam."

  miniPostClass: MiniPostClass = new MiniPostClass("#", "pic08.jpg", this.description)
  miniPostDefault = new MiniPostClassDefault();
  miniPost: MiniPost = {
    description: this.description,
    href: "#",
    src: "pic09.jpg",
  }

  get isLogged(): boolean {
    return this.service.isLogged
  }

  constructor(public service: AuthService) {
    this.miniPostClass.alt = "Alternatif";
    this.miniPostDefault.description = "Try Me"
  }

  alertDescription(): void {
    alert(this.description)
  }

  setDescription(texte: string) {
    this.description = texte;
  }


}

class MiniPostClass {
  href: string;
  src: string;
  alt?: string;
  description: string;

  constructor(href: string, src: string, description: string, alt?: string) {
    this.href = href;
    this.src = src;
    this.description = description;
    this.alt = alt
  }
}

class MiniPostClassDefault {
  href: string = "#";
  src: string = "pic01.jpg";
  alt?: string;
  description: string = "";
}

