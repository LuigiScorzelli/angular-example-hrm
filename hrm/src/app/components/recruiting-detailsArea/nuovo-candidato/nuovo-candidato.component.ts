import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SchedaAnagraficaModel } from '../../../Model/anagraficaCandidatoModel/scheda-anagrafica-model/scheda-anagrafica-model';
import { ChedaAnagraficaServiceService } from '../../../Services/SchedaAnagraficaService/cheda-anagrafica-service.service';

@Component({
  selector: 'app-nuovo-candidato',
  templateUrl: './nuovo-candidato.component.html',
  styleUrls: ['./nuovo-candidato.component.css']
})
export class NuovoCandidatoComponent implements OnInit {

  private _candidato: SchedaAnagraficaModel;
  private errorMsg = '';
  //private _myFormValueName: string[] = ['name', 'lastname', 'age', 'province', 'email'];

  constructor(
    private fb: FormBuilder, 
    private _sAService: ChedaAnagraficaServiceService
  ) { }

  ngOnInit(): void {}

  candidateForm = this.fb.group({
    name: '',
    lastname: '',
    age: '',
    province: '',
    email: ''
  })
  public getCandidato() {
    this._candidato = new SchedaAnagraficaModel();
    this._candidato.name= this.candidateForm.value.name;
    this._candidato.lastname= this.candidateForm.value.lastname;
    this._candidato.age= this.candidateForm.value.age;
    this._candidato.province= this.candidateForm.value.province;
    this._candidato.email= this.candidateForm.value.email;
    //return  this._candidato;
  }

  onSubmit(candidateForm) {
    console.log("class", this.getCandidato());
    console.log("form", candidateForm);
    this._sAService.get().subscribe(
      data => console.log('data success', data),
      error => this.errorMsg = error.statusText
    );
  }
}
