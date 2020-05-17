import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public authenticated = new BehaviorSubject(!!localStorage.getItem('authenticated'));

  constructor() {
  }

  isAuthenticated() {
    return !!localStorage.getItem('authenticated');
  }

  login() {
    localStorage.setItem('authenticated', 'true');
    this.authenticated.next(true);
  }

  logout() {
    localStorage.removeItem('authenticated');
    this.authenticated.next(false);
  }
}
