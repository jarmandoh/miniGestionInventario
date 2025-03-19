import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpeechrecognitionService } from '../../services/speechrecognition.service';

import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-capturavos',
  imports: [
    FormsModule,
    MatIconModule

  ],
  templateUrl: './capturavos.component.html',
  styleUrl: './capturavoz.component.css'
})
export class CapturavosComponent {
  texto: string = '';
  escuchando: boolean = false;
  oraciones: string[] = [];
  private subscription: Subscription | undefined;

  constructor(
    private speechRecognitionService: SpeechrecognitionService
  ) { }

  startRecording(){
    this.escuchando = true;
    this.texto = '';
    this.subscription = this.speechRecognitionService.escuchar().subscribe(
      (oraciones) => {
        this.oraciones = oraciones
        oraciones.forEach(oracion => {
          if(!this.texto.includes(oracion)){
            this.texto += oracion + ' ';
          }
        });
      }
    )
  }

  stopRecording(){
    this.escuchando = false;
    this.subscription?.unsubscribe();
  }
  
  ngDestroy(){
    this.subscription?.unsubscribe();
  }

}
