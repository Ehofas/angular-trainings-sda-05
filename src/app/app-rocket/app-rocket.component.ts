import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-app-rocket',
  templateUrl: './app-rocket.component.html',
  styleUrls: ['./app-rocket.component.scss']
})
export class AppRocketComponent implements OnInit, OnChanges {

  @Input() rocketId: string;
  @Input() name: string;
  @Input() launched: boolean;

  @Output() rocketLeave = new EventEmitter<any>();

  rocketImage = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftakeb1nzyto.space%2Fassets%2Fimg%2Frocket-light.gif&f=1&nofb=1';
  ngOnInit() {
    console.log('I am rocket number ', this.rocketId);
  }

  ngOnChanges() {
    console.log(this.rocketId, ' is launched:', this.launched);
    if (this.launched) {
      setTimeout(() => {
        this.rocketLeave.emit(this.rocketId);
      }, 2500);
    }
  }
}
