import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './paginas/login/login.component';
import { HeaderComponent } from './junta/header/header.component';
import { CarruselComponent } from './junta/carrusel/carrusel.component';
import { SeccionComponent } from './junta/seccion/seccion.component';
import { TopHeaderComponent } from './junta/top-header/top-header.component';
import { BuscadorComponent } from './junta/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    CarruselComponent,
    SeccionComponent,
    TopHeaderComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
