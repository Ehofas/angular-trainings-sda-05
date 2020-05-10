import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRocketComponent } from './app-rocket.component';

describe('AppRocketComponent', () => {
  let component: AppRocketComponent;
  let fixture: ComponentFixture<AppRocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
