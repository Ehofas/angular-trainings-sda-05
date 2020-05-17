import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rocket-form',
  templateUrl: './rocket-form.component.html',
  styleUrls: ['./rocket-form.component.scss']
})
export class RocketFormComponent implements OnInit {

  @Output() createRocket = new EventEmitter();

  constructor() {
  }

  rocketFormConfiguration:
    {
      key: string,
      placeholder: string,
      required?: boolean,
      errorMessage?: string,
      type?: string,
      maxLength?: string,
    }[]
    = [
    { key: 'rocketId', placeholder: 'Enter rocket id', required: true, errorMessage: 'Rocket id is required' },
    { key: 'name', maxLength: '20', placeholder: 'Enter name', required: true, errorMessage: 'Name is required' },
    { key: 'time', placeholder: 'Enter countdown time', type: 'number' }
  ];

  rocketModel = new FormGroup({
    rocketId: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    time: new FormControl(),
  });

  ngOnInit() {

    this.rocketModel.valueChanges.subscribe(value => {
      console.log('MODEL IS VALID:', this.rocketModel.valid);
      console.log('My rocket model value changed:', value);
    });
  }

  onFormSubmit() {
    this.createRocket.emit(this.rocketModel.value);
  }
}
