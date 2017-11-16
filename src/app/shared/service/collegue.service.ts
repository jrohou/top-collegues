import { Injectable } from '@angular/core';
import {Collegue} from '../domain/collegue'
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CollegueService {
  collegues:Collegue[] = [new Collegue("Loutre","https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/LutraCanadensis_fullres.jpg/290px-LutraCanadensis_fullres.jpg",100)]
  constructor(private http:HttpClient) { }

  listerCollegues():Promise<Collegue[]> {
    // TODO effectuer la liste des collègues

    // TODO retourner l'objet Promise<Collegue[]>
  return this.http.get<Collegue[]>('http://localhost:8080/collegues').toPromise()
}

sauvegarder(newCollegue:Collegue):Promise<Collegue[]> {
  // TODO sauvegarder le nouveau collègue
  // TODO retourner l'objet Promise<Collegue[]>
  return this.http.post<Collegue[]>('http://localhost:8080/collegues',newCollegue).toPromise()
  }


aimerUnCollegue(unCollegue:Collegue):Promise<Collegue> {
  // TODO Aimer un collègue
  let index = this.collegues.findIndex(c => c.pseudo == unCollegue.pseudo)
  this.collegues[index].score += 10;
  return new Promise((resolve,rejet) => {
    resolve(this.collegues[index]);
  })
}
detesterUnCollegue(unCollegue:Collegue):Promise<Collegue> {
  // TODO Détester un collègue

  let index = this.collegues.findIndex(c => c.pseudo == unCollegue.pseudo)
  this.collegues[index].score -= 5;
  return new Promise((resolve, rejet) => {
    resolve(this.collegues[index]);
  })
}

}
