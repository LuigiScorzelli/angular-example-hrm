import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AnagraficaCandidato } from '../../../Interface/anagrafica-candidato';
import { SchedaAnagraficaModel } from '../../../Model/anagraficaCandidatoModel/scheda-anagrafica-model/scheda-anagrafica-model';
import { ChedaAnagraficaServiceService } from '../../../Services/SchedaAnagraficaService/cheda-anagrafica-service.service';

@Component({
  selector: 'app-seleziona-candidato',
  templateUrl: './seleziona-candidato.component.html',
  styleUrls: ['./seleziona-candidato.component.css']
})
export class SelezionaCandidatoComponent implements OnInit {
  private _searchCandidate: AnagraficaCandidato;
  public errorSearch: string;
  public datarequest = [];

  get name() {
    return this.myForm.get('name');
  }
  constructor(private fb: FormBuilder, private _sAService: ChedaAnagraficaServiceService) { }

  ngOnInit(): void {
  }
  myForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    lastname: '',
    age: '',
    province: '',
    email: ''
  });
  // assegno al candidato una struttura dati predefinita
  public getSearchCandidate() {
    this._searchCandidate = new SchedaAnagraficaModel();
    this._searchCandidate.name = this.myForm.value.name;
    this._searchCandidate.lastname = this.myForm.value.lastname;
    return this._searchCandidate;
  }

  search(){
    // al click invio la richiesta con i dati del input
    this._sAService.getCandidate(this.getSearchCandidate()).subscribe({
      next: result => this.getResult(result),
      error: err => this.errorSearch = 'errore request'
    });
  }
  getResult(arrData) {
    document.getElementsByClassName('form-control')[0]['value']= '';
    document.getElementsByClassName('form-control')[1]['value']= '';
    // ricevo la risposta dal server e controllo
    if(arrData.length > 0) {
      this.datarequest = arrData;
      this.errorSearch = '';
    } else {
      this.errorSearch = 'Ricerca non riuscita. Riprovare'
    }
    
  }
}
