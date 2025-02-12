import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MovimientoComponent } from '../../pages/movimiento/movimiento.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MovimientoComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  showFiller = false;
}
