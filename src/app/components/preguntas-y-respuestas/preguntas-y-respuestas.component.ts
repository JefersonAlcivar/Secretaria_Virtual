import { Component, OnInit } from '@angular/core';
import { FAQ } from './faq.model';

@Component({
  selector: 'app-preguntas-y-respuestas',
  templateUrl: './preguntas-y-respuestas.component.html',
  styleUrls: ['./preguntas-y-respuestas.component.css']
})
export class PreguntasYRespuestasComponent implements OnInit {

  faqs: FAQ[] = [
    { question: '¿Cómo puedo registrarme?', answer: 'Puedes registrarte haciendo clic en el botón de registro en la parte superior de la página.' },
    { question: '¿Cómo puedo cambiar mi contraseña?', answer: 'Por ahora no está disponible.' },
    { question: '¿Dónde puedo ver mis citas?', answer: 'Tus citas están disponibles en la sección de calendario.' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
