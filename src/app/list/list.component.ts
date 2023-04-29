import { Component } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent { 
  constructor(public service: HeroService) { 
  }
}