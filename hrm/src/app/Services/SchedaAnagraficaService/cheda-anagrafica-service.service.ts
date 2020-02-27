import { Injectable } from '@angular/core';
//import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AnagraficaCandidato } from '../../Interface/anagrafica-candidato';
//import { SchedaAnagraficaModel } from '../../Model/anagraficaCandidatoModel/scheda-anagrafica-model/scheda-anagrafica-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChedaAnagraficaServiceService {
  private url: string = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  public get(): Observable<AnagraficaCandidato[]> {
    return this.http.get<AnagraficaCandidato[]>(this.url);
  }
}
