import { Component } from '@angular/core';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {

  article: Article = {
    imageAlt: '',
    imageSrc: '',
    titre: '',
    description: '',
    postLink: ''
  }

  onSubmit(valid: boolean) {
    if(valid) console.log("Article : ", this.article);
  }
}
