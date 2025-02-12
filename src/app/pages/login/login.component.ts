import { Component } from '@angular/core';
import { AuthComponent } from '../../components/auth/auth.component';

@Component({
  selector: 'app-login',
  imports: [
    AuthComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
