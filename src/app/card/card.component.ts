import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //[hero]="x" html-oldalon
  @Input() hero = new Hero;

  //törlés esemény és a nyomógombon elindítjuk a törlés eseményt >>>  <a (click)="this.deleted.emit(hero.id)" class="btn btn-danger mt-5">Delete</a>
  //(deleted)="this.service.delete($event)" html oldalon
  @Output() deleted = new EventEmitter<string>();

  //@Input() import hatására a list.component.html-en <app-card [hero]="x"></app-card> rátudjuk akasztani a [hero]="x" iterálásunkgat és berakja az összes képet az app-card componensbe
  getPercentage(x: Hero) {
    return 'width: ' + (x.power*10) + "%;"
  }
}