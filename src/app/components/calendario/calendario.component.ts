import { Component } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {
  fechaActual: Date = new Date();
  diasDelMes: number[] = [];

  constructor() {
    this.generarDiasDelMes();
  }

  cambiarMes(mes: number) {
    this.fechaActual.setMonth(this.fechaActual.getMonth() + mes);
    this.generarDiasDelMes();
  }

  generarDiasDelMes() {
    const mes = this.fechaActual.getMonth();
    const anio = this.fechaActual.getFullYear();
    const diasEnMes = new Date(anio, mes + 1, 0).getDate();
    this.diasDelMes = Array.from({ length: diasEnMes }, (_, i) => i + 1);
  }
}