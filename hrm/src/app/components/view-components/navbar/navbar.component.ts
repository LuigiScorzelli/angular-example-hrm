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
    } 
  } 
  constructor() { }

  ngOnInit(): void {
  }

}
