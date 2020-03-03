import { Component, OnInit, Input, Output, EventEmitter   } from '@angular/core';
//import { SchedaAnagraficaCompletaInterface } from '../../../Interface/scheda-anagrafica-completa';
import { SchedaAnagraficaCompleta } from '../../../Model/schedaAnagraficaCompleta/scheda-anagrafica-completa';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input('datarequests') public dataRequests: [] = [];
  //@Output() public candidateSelected = new EventEmitter();

  //public isActive: boolean = false;
  // spostare nel componente app-modal
  public isSelected = [];

  constructor() { }

  ngOnInit(): void {
  }

  getSelected(data) {
    //this.isActive = true;
    console.log("component", data);
    this.isSelected.push(data);
  }
  /*firstEvent() {
    this.candidateSelected.emit('Text to children ad parent');
  }*/
}
