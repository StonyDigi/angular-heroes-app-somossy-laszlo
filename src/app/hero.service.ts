import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  //összes hero
  heroes: Array<Hero> = new Array<Hero>();
  
  //fogja az összes hero-t és hozzáteszi a gyűjteményhez és meghívja a save()-t, elmenti
  create(h: Hero) {
    this.heroes.push(h);
    this.save();
  }

  delete(id: string) {
    this.heroes = this.heroes.filter(t => t.id != id);
    this.save();
  }
  //localstoreageból betölti a herokat, ha nem talál semmit akkor üres [] ként tér vissza
  load() {
    this.heroes = JSON.parse(localStorage.getItem('heroes') ?? '[]');
  }
  //localstoreage-ba lementi  a herokat miután JSON-é alakította!!
  save() {
    localStorage.setItem('heroes', JSON.stringify(this.heroes));
  }

  constructor() { 
    this.load();
   }
}