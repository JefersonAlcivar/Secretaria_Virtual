import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PreguntasYRespuestasComponent } from './components/preguntas-y-respuestas/preguntas-y-respuestas.component';
import { RecuperarComponent } from './components/recuperar/recuperar.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { ChatEnVivoComponent } from './components/chat-en-vivo/chat-en-vivo.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { TareasComponent } from './components/tareas/tareas.component';

import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';



const routes: Routes = [
  {path:"", redirectTo: "inicio", pathMatch:"full"},
  
  {path:"login",component:LoginComponent},


  {
    path:"tareas",
    component: TareasComponent,
    ...canActivate (() => redirectUnauthorizedTo (['login']))
  },

  {
    path:"notificaciones",
    component: NotificacionesComponent,
    ...canActivate (() => redirectUnauthorizedTo (['login']))
  },

  {path:"register",component:RegisterComponent},
  {path:"inicio",component:InicioComponent},
  {path:"contacto",component:ContactoComponent},
  {path:"preguntas-y-respuestas",component:PreguntasYRespuestasComponent},
  {path:"recuperar",component:RecuperarComponent},
  {path:"sobre-nosotros",component:SobreNosotrosComponent},
  {path:"chat-en-vivo",component:ChatEnVivoComponent},
  {path:"calendario",component:CalendarioComponent},



  {path:"**", redirectTo:"inicio", pathMatch:"full"},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
