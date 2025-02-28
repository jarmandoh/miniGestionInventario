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
  private isListening = false;


  constructor(private zone: NgZone) {

  }

  escuchar(): Observable<string> {
    return new Observable(observer => {
      const { webkitSpeechRecognition }: IWindow = <IWindow>(<any>window);
      this.recognition = new webkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.lang = 'es-ES';
      this.recognition.interimResults = true;
      this.recognition.maxAlternatives = 1;

      this.recognition.onresult = (event:any) => {
        this.zone.run(() => {
          observer.next(event.results[event.results.length - 1][0].transcript);
        });
      };

      this.recognition.onerror = (error:any) => {
        observer.error(error);
      };

      this.recognition.onend = () => {
        observer.complete();
      };

      this.recognition.start();
      this.isListening = true;

      return () => {
        this.recognition.stop();
        this.isListening = false;
      };
    });
  }
}
