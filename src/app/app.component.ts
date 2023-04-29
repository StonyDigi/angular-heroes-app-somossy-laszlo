import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //több kép kezelése
  /*pictureDatas: Array<string> = new Array<string>();
  photoUpload(event: any) {
    let files: Array<File> = event.target.files;
    for(let x of files) {
      let reader = new FileReader();
      reader.onload = (e:any) => {
        this.pictureDatas.push(e.target.result);
      }
      reader.readAsDataURL(x);
    }
  }
    */
  
}