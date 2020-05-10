import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

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

  interval;

  launchTheRocket() {
    if (!this.rocketNotLaunched) {
      return;
    }

    this.rocketNotLaunched = false;

    const launchInterval = setInterval(() => {
      this.countdownTimer = this.countdownTimer - 1;
      console.log(this.countdownTimer);
      if (this.countdownTimer === 0) {
        clearInterval(launchInterval);
      }
    }, 1000);
  }

  countdownTimerChange(event) {
    console.log('change', event.target.value);
    if (event.target.value < 1) {
      this.configurationError = true;
    } else {
      this.configurationError = false;
      this.countdownTimer = event.target.value;
    }
  }
}
