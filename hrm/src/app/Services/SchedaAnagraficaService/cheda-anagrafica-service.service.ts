import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SchedaAnagraficaModel } from '../../Model/anagraficaCandidatoModel/scheda-anagrafica-model/scheda-anagrafica-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChedaAnagraficaServiceService {
  private urlPost: string = 'http://localhost:3000/newCandidate';
  private urlGetSearch: string = 'http://localhost:3000/newCandidate?';
  public name: string = '';
  public lastname: string = '';
  private urlSearch: string;
  constructor(private http: HttpClient) { }
 
  public getCandidate(dataName): Observable<SchedaAnagraficaModel[]>{
    if(dataName.name != null && dataName.lastname == '') {
      this.name = 'name=' + dataName.name;
      this.urlSearch = this.urlGetSearch + this.name;
    } else if (dataName.name == '' && dataName.lastname != null) {
      this.lastname = 'lastname=' + dataName.lastname;
      this.urlSearch = this.urlGetSearch + this.lastname;
    } else {
      this.name = 'name=' + dataName.name;
      this.lastname = '&lastname=' + dataName.lastname;
      this.urlSearch = this.urlGetSearch + this.name +this.lastname;
    }
    //console.log('url', this.urlSearch);
    return this.http.get<SchedaAnagraficaModel[]>(this.urlSearch);
  }

  public save(schedaAM) {
    return this.http.post<SchedaAnagraficaModel>(this.urlPost, schedaAM);
  }
}
