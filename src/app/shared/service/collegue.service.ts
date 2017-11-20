import { Injectable } from '@angular/core';
import {Collegue} from '../domain/collegue'
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable()
export class CollegueService {

  constructor(private http:HttpClient) { }

  listerCollegues():Promise<Collegue[]> {

  return this.http.get<Collegue[]>(environment.apiUrl + '/collegues').toPromise()
}

sauvegarder(newCollegue:Collegue):Promise<Collegue[]> {

  return this.http.post<Collegue[]>(environment.apiUrl + '/collegues',newCollegue).toPromise()
  }


aimerUnCollegue(unCollegue:Collegue):Promise<Collegue> {
  unCollegue.score += 10;
  return this.http.put<Collegue>(environment.apiUrl+`/collegues/${unCollegue.pseudo}/score`,unCollegue,httpOptions).toPromise();
}
detesterUnCollegue(unCollegue:Collegue):Promise<Collegue> {

  unCollegue.score -= 5;
  return this.http.put<Collegue>(environment.apiUrl+`/collegues/${unCollegue.pseudo}/score`,unCollegue,httpOptions).toPromise();
}

}
