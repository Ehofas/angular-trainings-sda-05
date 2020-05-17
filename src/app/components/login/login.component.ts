import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {
  }

  authenticate() {
    this.authenticationService.login();

    this.activatedRoute.params.subscribe(params => {
      const { desiredRoute } = params;
      this.router.navigate([desiredRoute]);
    });
  }
}
