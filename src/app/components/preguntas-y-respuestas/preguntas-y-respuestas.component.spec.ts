import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasYRespuestasComponent } from './preguntas-y-respuestas.component';

describe('PreguntasYRespuestasComponent', () => {
  let component: PreguntasYRespuestasComponent;
  let fixture: ComponentFixture<PreguntasYRespuestasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreguntasYRespuestasComponent]
    });
    fixture = TestBed.createComponent(PreguntasYRespuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
