import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'rl-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  authUrl: string;

  constructor () {
    this.authUrl = AuthService.authUrl;
  }

  ngOnInit () {
  }

}
