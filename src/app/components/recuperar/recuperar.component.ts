import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {
  recuperarUsuario: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {
    this.recuperarUsuario = this.fb.group({
      correo: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {}

  recuperar() {
    if (this.recuperarUsuario.valid) {
      this.loading = true;
      const correo = this.recuperarUsuario.get('correo')?.value;

      this.afAuth
        .sendPasswordResetEmail(correo)
        .then(() => {
          this.loading = false;
          alert('Se ha enviado un correo de recuperación a ' + correo);
          this.router.navigate(['/login']);
        })
        .catch((error) => {
          this.loading = false;
          alert('Error al enviar el correo de recuperación: ' + error.message);
        });
    }
  }
}
