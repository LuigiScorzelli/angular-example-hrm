import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public textNavbar = {
    itemTitleNavbarAreaRecruting: {
      itemTextNav : 'Area Recruiting',
      itemTextDropdown1 : 'Nuovo Candidato',
      itemTextDropdown2 : 'Seleziona Candidato',
      itemTextDropdown3 : 'Statistiche'
    },
    itemTitleNavbarAreaCommercial: {
      itemTextNav: 'Area Commerciale',
      itemTextDropdown1: 'Nuova Richiesta',
      itemTextDropdown2 : 'Disponibili'
    },
    itemTitleNavbarAreaCourses: {
      itemTextNav: 'Area Corsi',
      itemTextDropdown1: 'Nuovo Corso',
      itemTextDropdown2 : 'Modifica Corso'
    },
    itemTitleNavbarAreaTechnique: {
      itemTextNav: 'Area Tecnica',
      itemTextDropdown1: 'Nuova Feedback',
      itemTextDropdown2 : 'Modifica Feedback'
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
