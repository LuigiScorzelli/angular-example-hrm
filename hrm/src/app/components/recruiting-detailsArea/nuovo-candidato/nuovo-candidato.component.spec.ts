import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoCandidatoComponent } from './nuovo-candidato.component';

describe('NuovoCandidatoComponent', () => {
  let component: NuovoCandidatoComponent;
  let fixture: ComponentFixture<NuovoCandidatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovoCandidatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovoCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
