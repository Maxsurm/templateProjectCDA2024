import { Component } from '@angular/core';
@Component({
  selector: 'app-minipost',
  templateUrl: './minipost.component.html',
  styleUrls: ['./minipost.component.css']
})
export class MinipostComponent {
  miniPost: MiniPost = {
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
