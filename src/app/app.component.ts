import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-angular-trainings';
  countdownTimer = 3;
  rocketNotLaunched = true;
  configurationError = false;

  authenticated = false;

  availableRockets = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {
    this.authenticated = this.authenticationService.isAuthenticated();
    this.authenticationService.authenticated.subscribe(authenticated => {
      console.log('authenticated', authenticated);
      this.authenticated = authenticated;
    });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }

  countdownTimerChange(event) {
    if (event.target.value < 1) {
      this.configurationError = true;
    } else {
      this.configurationError = false;
      this.countdownTimer = event.target.value;
    }
  }

  buyNewRocket(rocket) {
    console.log('rocket', rocket);
    const rocketWasFound = this.availableRockets.find(r => r.id === rocket.id);

    if (rocketWasFound) {
      alert('Rocket with this ID already exists!');
      return;
    }

    this.availableRockets.push(rocket);
  }

  onRocketLeave(rocketId) {
    this.availableRockets = this.availableRockets.filter(rocket => rocket.id !== rocketId);
  }
}
