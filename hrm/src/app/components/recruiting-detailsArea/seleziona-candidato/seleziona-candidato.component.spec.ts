import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelezionaCandidatoComponent } from './seleziona-candidato.component';

describe('SelezionaCandidatoComponent', () => {
  let component: SelezionaCandidatoComponent;
  let fixture: ComponentFixture<SelezionaCandidatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelezionaCandidatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelezionaCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
