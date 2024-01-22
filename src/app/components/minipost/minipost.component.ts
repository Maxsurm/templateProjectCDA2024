import {Component, Input} from '@angular/core';
@Component({
  selector: 'app-minipost',
  templateUrl: './minipost.component.html',
  styleUrls: ['./minipost.component.css']
})
export class MinipostComponent {

  @Input() // Prépare le composant à recevoir une information lors de son appel
  article: MiniPost = {
    description: "",
    href: "#",
    src: "pic01.jpg",
  }
}

export interface MiniPost {
  href: string;
  src: string;
  alt?: string;
  description: string;
}
