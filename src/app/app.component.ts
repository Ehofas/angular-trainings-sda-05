import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-trainings';
  countdownTimer = 3;
  rocketNotLaunched = true;
  configurationError = false;

  availableRockets = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];

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
