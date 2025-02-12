import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


import {MatButtonModule} from '@angular/material/button';
import { routes } from '../../app.routes';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  imports: [
    ReactiveFormsModule,
    MatButtonModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  authForm: FormGroup;
  isLoginMode = true;
  email: string = '';
  password: string = '';
  mensajeError: string = '';


  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.authForm = new FormGroup({});
  }

  ngOnInit() {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['']
    });
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    if (this.isLoginMode) {
      this.authForm.removeControl('confirmPassword');
    } else {
      this.authForm.addControl('confirmPassword', this.fb.control('', Validators.required));
    }
  }

  onSubmit() {
    if (this.authForm.valid) {
      console.log(this.authForm.value);
      this.authService.login({ email: this.email, password: this.password }).subscribe(
        (response) => {
          this.authService.setToken(response.token);
          this.router.navigate(['/inventario']); // Redirige después del login
        },
        () => {
          this.mensajeError = 'Credenciales incorrectas';
        }
      );
      // Here you would typically call your authentication service
      
      this.router.navigate(['/dashboard']);
    }
    this.authForm.reset();
  }
}
