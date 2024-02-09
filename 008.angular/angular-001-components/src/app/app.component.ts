import { Component } from '@angular/core';
import { HolaMundoComponent } from "./hola-mundo/hola-mundo.component";
import { AdiosMundoComponent } from './adios-mundo/adios-mundo.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HolaMundoComponent, AdiosMundoComponent]
})
export class AppComponent {
  title = 'Hola soy Lili';
}
