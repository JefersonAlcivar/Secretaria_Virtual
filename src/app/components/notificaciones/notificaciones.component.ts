import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

interface Notificacion {
  id: number;
  mensaje: string;
  estado: string;
}

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent {
  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  notificaciones: Notificacion[] = [
    { id: 1, mensaje: 'Tarea pendiente de revisión', estado: 'Pendiente' },
    { id: 2, mensaje: 'Nueva tarea asignada', estado: 'Pendiente' },
    { id: 3, mensaje: 'Solicitud de aprobación', estado: 'Pendiente' },
    { id: 4, mensaje: 'Actualización de datos necesaria', estado: 'Pendiente' }
  ];

  onClick() {
    this.userService.logout()
      .then(() => {
        this.toastr.success('¡Cierre de sesión logrado!', 'Éxito');
        this.router.navigate(['/acerca-de-nosotros']);
      })
      .catch(error => console.log(error));
  }
}