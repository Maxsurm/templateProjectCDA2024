import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  @Input()
  article?: Article

  @Output()
  articleDeleted: EventEmitter<number> = new EventEmitter<number>();

  constructor(private service: ArticleService) {
  }
  
  delete(id: number|undefined) {
    if(id) {
      this.service.delete(id).subscribe({
        next: () => this.articleDeleted.emit(id)
      });
    }
  }
}
