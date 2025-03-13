import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpeechrecognitionService } from '../../services/speechrecognition.service';
import { JsonPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-capturavos',
  imports: [
    NgIf,
    JsonPipe
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
        console.log(oraciones)
        this.oraciones = oraciones
      }
      /* (texto: string) => {
        this.texto = texto;
      } */
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
