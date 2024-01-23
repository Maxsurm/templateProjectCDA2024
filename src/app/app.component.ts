import { Component } from '@angular/core'
import { Article } from './models/article'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Article[] = [
    {
      titre: "Interdum aenean",
      description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
      imageSrc: "pic01.jpg",
      imageAlt: "",
      postLink: "#"
    },
    {
      titre: "Nulla amet dolore",
      description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
      imageSrc: "pic02.jpg",
      imageAlt: "",
      postLink: "#"
    },
    {
      titre: "Tempus ullamcorper",
      description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
      imageSrc: "pic03.jpg",
      imageAlt: "",
      postLink: "#"
    },
    {
      titre: "Sed etiam facilis",
      description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
      imageSrc: "pic04.jpg",
      imageAlt: "",
      postLink: "#"
    },
    {
      titre: "Sed etiam facilis",
      description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
      imageAlt: "",
      postLink: "#"
    },
    {
      titre: "Feugiat lorem aenean",
      description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
      imageSrc: "pic05.jpg",
      imageAlt: "",
      postLink: "#"
    },
    {
      titre: "Amet varius aliquam",
      description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
      imageSrc: "pic06.jpg",
      imageAlt: "",
      postLink: "#"
    }]
}
