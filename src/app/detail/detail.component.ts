import { Component, OnInit, Input } from '@angular/core';
import {Collegue} from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';
import { UnCollegueComponent } from '../un-collegue/un-collegue.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent extends UnCollegueComponent implements OnInit {

  collegue:Collegue;
  pseudo:string;
  constructor( collegueService:CollegueService, route:ActivatedRoute) {
    super(collegueService);
    route.params.subscribe(params => {this.pseudo = params['pseudo'];
  });
   }
   ngOnInit() {
     this.collegueService.listerCollegues().then(collegues => this.collegue = collegues.filter(c => c.pseudo == this.pseudo)[0]);
   }

}
