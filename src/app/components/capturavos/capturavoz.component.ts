import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpeechrecognitionService } from '../../services/speechrecognition.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-capturavos',
  imports: [
    NgIf
  ],
  templateUrl: './capturavos.component.html',
  styleUrl: './capturavoz.component.css'
})
export class CapturavosComponent {
  texto: string = '';
  escuchando: boolean = false;

  private subscription: Subscription | undefined;

  constructor(
    private speechRecognitionService: SpeechrecognitionService
  ) { }

  startRecording(){
    this.escuchando = true;
    this.subscription = this.speechRecognitionService.escuchar().subscribe((texto: string) => {
        this.texto = texto;
    })
  }

  stopRecording(){
    this.escuchando = false;
    this.subscription?.unsubscribe();
  }

  ngDestroy(){
    this.subscription?.unsubscribe();
  }

}
