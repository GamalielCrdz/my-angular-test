import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  personas = [{ id: 1, name: 'jose' },
  { id: 2, name: 'pepe' },
  { id: 3, name: 'maria' },
  { id: 4, name: 'gama' }]
  
  show_form = false;

  persona = { id: null, name: null };
  
  addNote() {
    this.show_form = true;
  }

  cancel() {
    this.show_form = false;
  }

  creteNote() {
    this.show_form = false;
    this.personas.push(this.persona);
    this.persona = { id: null, name: null };
  }

}
