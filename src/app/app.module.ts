import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // Importar FormsModule



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PreguntasYRespuestasComponent } from './components/preguntas-y-respuestas/preguntas-y-respuestas.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RecuperarComponent } from './components/recuperar/recuperar.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { ChatEnVivoComponent } from './components/chat-en-vivo/chat-en-vivo.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { TareasComponent } from './components/tareas/tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContactoComponent,
    PreguntasYRespuestasComponent,
    InicioComponent,
    RecuperarComponent,
    SobreNosotrosComponent,
    NotificacionesComponent,
    ChatEnVivoComponent,
    CalendarioComponent,
    TareasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),


    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
