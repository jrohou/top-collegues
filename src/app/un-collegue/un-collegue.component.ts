import { Component, OnInit , Input} from '@angular/core';
import {Collegue} from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';
import { ScorePipe } from '../shared/pipe/score.pipe';

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {

  @Input() collegue:Collegue;
   collegues:Collegue[];
   limite:number = 3;
   nom:string="";
  constructor(public collegueService:CollegueService) { }

  ngOnInit() {
    this.collegueService.listerCollegues().then((data) => this.collegues = data);
  }


  jaime() {
    this.collegueService.aimerUnCollegue(this.collegue).then(col =>
      this.collegue = col)
  }

  jedeteste() {
    this.collegueService.detesterUnCollegue(this.collegue).then(col =>
      this.collegue = col)
  }

  onkeyup($event) {

    this.limite = $event.target.value;
  }

  nomChercher($event) {
    this.nom = $event.target.value;
  }

}
