import { Component } from '@angular/core';
import { ProductosComponent } from './productos/productos.component';
import { ClientesComponent } from './clientes/clientes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductosComponent, ClientesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project_01';
}
