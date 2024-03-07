import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Register } from '../models/register.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  // no necesita FormBuilder - otra manera de hacer
  registerForm = new FormGroup({
    email: new FormControl(''),
    phone: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private httpClient: HttpClient) {}

  save() {
    const register: Register = {
      email: this.registerForm.get('email')?.value ?? '',
      phone: this.registerForm.get('phone')?.value ?? '',
      password: this.registerForm.get('password')?.value ?? ''
    }
    // enviar registro a backend
    console.log(register);

    // limpiar el formulario o redirigir a la pantalla de login
    this.registerForm.reset();
  }
}
