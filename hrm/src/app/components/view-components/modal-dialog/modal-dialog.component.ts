import { Component, OnInit, Input } from '@angular/core';
//import { Validators } from '@angular/forms';
import { SchedaAnagraficaCompleta } from '../../../Model/schedaAnagraficaCompleta/scheda-anagrafica-completa';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent implements OnInit {
  @Input('selected') public isSelected: [] = [];
  public newAnagrafic = new SchedaAnagraficaCompleta();

  constructor() { }

  ngOnInit(): void { }

  /*anagraficForm = this.fb.group({
    //name: 'prova testo',
    name: '',
    lastname: '',
    age: '',
    province: '',
    email: '',
    genere: '',
    annoDiNascita: '',
    common: '',
    sigla_nazionale: '',
    phone: '',
    skype: '',
    training: '',
    ambito: '',
    cv_disponibile: '',
    fonte_cv: '',
    skills_txt: '',
    tipo_candidatura: '',
    status: '',
    protectedCategory: '',
    informativaGDPR: '',
  });*/

  public getAnagraficCandidate() {
    console.log('is selected form');
  }
}
