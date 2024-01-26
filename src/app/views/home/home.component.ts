import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  posts: Observable<Article[]> = of([])

  constructor(private service: ArticleService){
    this.getAll();
  }

  getAll() {
    this.posts = this.service.all();
  }


}
