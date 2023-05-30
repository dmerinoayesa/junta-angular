import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonaStorageService } from './persona-storage.service';
import { Persona } from './persona';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba-angular';
  name = '';
  password = '';

  user = 'danimerino';
  password2 = '12345';

  lista : Array<Persona> = [];
  constructor(personaStorageService : PersonaStorageService ){

  }

  addUser():void {
  }


  sacaAlerta(): void {
    alert("accedes");
  }

  rechazaUser(): void {
    alert("No entras");
  }

  cambiaNombre(): void {
    this.title = "Otro";
  }


  checkLogin() {
    if (this.name == this.user && this.password == this.password2) {
      this.sacaAlerta();
     
    } else {
      this.rechazaUser();
    }
  }


}
