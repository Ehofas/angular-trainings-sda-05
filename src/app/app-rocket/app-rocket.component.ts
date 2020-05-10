import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-rocket',
  templateUrl: './app-rocket.component.html',
  styleUrls: ['./app-rocket.component.scss']
})
export class AppRocketComponent implements OnInit {

  rocketImage = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftakeb1nzyto.space%2Fassets%2Fimg%2Frocket-light.gif&f=1&nofb=1';
  constructor() { }

  ngOnInit() {
  }

}
