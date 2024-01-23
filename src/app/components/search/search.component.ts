import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Input()
  texte: string = "texte";
  @Output() // Permet de préciser que le composant peut transmettre une information à celui qui l'apelle
  texteChange: EventEmitter<string> = new EventEmitter<string>() // Tout output est un EventEmitter<TypeARetourner>
  
  logValue(): void {
    //@ts-ignore
    //this.texte = event.target?.value // ici l'utilisation du '?' apporte une vérification avant l'accès à une donnée
    this.texteChange.emit(this.texte) // emit déclenche l'évènement qui portera l'information aux autres composants
  }

  date: Date = new Date();
}
