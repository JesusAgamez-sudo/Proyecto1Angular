import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  registerForm: FormGroup;
  loginForm: FormGroup;
  uploadedFile: File | null = null;

  constructor(private fb: FormBuilder) {
    // Inicializar el formulario de registro
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    // Inicializar el formulario de inicio de sesión
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Manejar el envío del formulario de registro
  onRegister() {
    if (this.registerForm.valid) {
      console.log('Formulario de Registro:', this.registerForm.value);
      console.log('Archivo cargado:', this.uploadedFile);
    }
  }

  // Manejar el cambio de archivo
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.uploadedFile = input.files[0];
      console.log('Archivo seleccionado:', this.uploadedFile);
    }
  }

  // Manejar el envío del formulario de inicio de sesión
  onLogin() {
    if (this.loginForm.valid) {
      console.log('Formulario de Inicio de Sesión:', this.loginForm.value);
    }
  }
}
