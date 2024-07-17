import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

interface Tarea {
  id: number;
  estado: string;
  fechaEntrega: string;
}

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  tareas: Tarea[] = [
    { id: 1, estado: 'Pendiente', fechaEntrega: '-' },
    { id: 2, estado: 'Completada', fechaEntrega: '03/05/2023' },
    { id: 3, estado: 'Rechazada', fechaEntrega: '01/05/2023' },
    { id: 4, estado: 'Pendiente', fechaEntrega: '-' },
    { id: 5, estado: 'Completada', fechaEntrega: '04/05/2023' },
    { id: 6, estado: 'Rechazada', fechaEntrega: '02/05/2023' }
  ];

  idTareaConsultada: Tarea | null = null;

  consultarTarea() {
    const idTarea = Number((document.getElementById('id_tarea') as HTMLInputElement).value);
    console.log('Consultando tarea con ID:', idTarea);

    this.idTareaConsultada = this.tareas.find(tarea => tarea.id === idTarea) || null;
  }

  onClick() {
    this.userService.logout()
      .then(() => {
        this.toastr.success('¡Cierre de sesión logrado!', 'Éxito');
        this.router.navigate(['/acerca-de-nosotros']);
      })
      .catch(error => console.log(error));
  }
}


