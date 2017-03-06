import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor (private auth: AuthService, private router: Router) {
  }

  canActivate (): boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/public/login']);
    return false;
  }
}
