import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  //inputmezők összekötése a hero tulajdonságokkal: 1.app.modules.ts-ben be importáljuk a FormsModule-t
  //2.create.component.html-be  összekötjük az input mezőket az értékekkel , [(ngModel)]="this.actual.name", módon
  actual: Hero = new Hero();

  constructor(private service: HeroService, private router: Router) {

  }

  photoUpload(event: any) {
    let file: File = event.target.files[0];
   
      const reader = new FileReader();
      reader.onload = (e:any) => {
        this.actual.imageBase64 = e.target.result;
      }
      reader.readAsDataURL(file);
    }

    create() {
      this.service.create(this.actual);
      this.router.navigate(['list']);
    }
  }