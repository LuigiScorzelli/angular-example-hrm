import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AnagraficaCandidato } from '../../../Interface/anagrafica-candidato';
import { SchedaAnagraficaModel } from '../../../Model/anagraficaCandidatoModel/scheda-anagrafica-model/scheda-anagrafica-model';
import { ChedaAnagraficaServiceService } from '../../../Services/SchedaAnagraficaService/cheda-anagrafica-service.service';

@Component({
  selector: 'app-nuovo-candidato',
  templateUrl: './nuovo-candidato.component.html',
  styleUrls: ['./nuovo-candidato.component.css']
})
export class NuovoCandidatoComponent implements OnInit {

  private _candidato: AnagraficaCandidato;
  //private _candidato: SchedaAnagraficaModel;
  //private errorMsg = '';
  //private _myFormValueName: string[] = ['name', 'lastname', 'age', 'province', 'email'];

  get name() {
    return this.candidateForm.get('name');
  }
  get lastname() {
    return this.candidateForm.get('lastname');
  }
  constructor(
    private fb: FormBuilder, 
    private _sAService: ChedaAnagraficaServiceService
  ) { }

  ngOnInit(): void {}

  candidateForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    lastname: ['', [Validators.required, Validators.minLength(3)]],
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

    this._sAService.save(this._candidato).subscribe({
      next: result => console.log("post ok"),
      error: err => console.log("errore post"),
    })
  }
}
