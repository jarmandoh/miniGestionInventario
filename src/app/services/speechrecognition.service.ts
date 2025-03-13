import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

interface IWindow extends Window {
  webkitSpeechRecognition: any; // Chrome only
  SpeechRecognition: any; // Firefox only (https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)
}

@Injectable({
  providedIn: 'root'
})
export class SpeechrecognitionService {
  private recognition: any;
  private oraciones: string[] = [];

  constructor(private zone: NgZone) {
  }

  escuchar(): Observable<string[]> {
    
    return new Observable((observer) => {
      if (!('webkitSpeechRecognition' in window)) {
        throw new Error('Navegador no soportado');
      }
      const { webkitSpeechRecognition }: IWindow = <IWindow>(<any>window);
      this.recognition = new webkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.lang = 'es-ES';
      this.recognition.interimResults = true;
      this.recognition.maxAlternatives = 1;

      this.recognition.onresult = (speech:any) => {
        let frases: string = '';
        if(speech.results){
          var result = speech.results[speech.resultIndex];
          var mensaje = result[0].transcript;
          if(result.isFinal){
            frases = mensaje;
            if(frases.length > 0){
              this.oraciones.push(frases.trim());
            }
          } else {
            frases = mensaje;
          }
        }
        this.zone.run(() => {
          observer.next(this.oraciones);
        });
      };

      this.recognition.onerror = (error:any) => {
        observer.error(error);
      };

      this.recognition.onend = () => {
        observer.complete();
      };

      this.recognition.start();
      // this.isListening = true;

      return () => {
        this.recognition.stop();
        this.oraciones = []
        //this.isListening = false;
      };
    });
  }
}
