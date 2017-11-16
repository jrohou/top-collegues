import { Component } from '@angular/core';
import { Collegue } from './shared/domain/collegue';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CollegueService } from './shared/service/collegue.service';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public collegues:Collegue[];
  public hit;

  constructor(public collegueService:CollegueService) {

  }
ngOnInit() {
this.hit = true;
this.collegueService.listerCollegues().then((listeCollegues) => this.collegues = listeCollegues)
}
add(pseudo:HTMLInputElement, imageurl:HTMLInputElement) {
  this.collegueService.sauvegarder(new Collegue(pseudo.value, imageurl.value, 100));
  //this.collegues.push(new Collegue(pseudo.value,imageurl.value,100));
  this.hit = false;
  pseudo.value = "";
  imageurl.value = "";
  return false;
}
}
