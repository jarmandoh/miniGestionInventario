import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuOpenSubject = new BehaviorSubject<boolean>(false);
  menuOpen$ = this.menuOpenSubject.asObservable();

  toogleMenu(){
    this.menuOpenSubject.next(!this.menuOpenSubject.value);
  }
  openMenu(){
    this.menuOpenSubject.next(true);
  }
  closeMenu(){
    this.menuOpenSubject.next(false);
  }

}
