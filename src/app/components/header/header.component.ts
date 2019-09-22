import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private _authService: AuthService, private _router: Router) {
    if (localStorage.getItem('isLoggedIn')) {
      this.isLoggedIn = true;
    }
  }

  ngOnInit() {
    this._authService.isLoggedIn.subscribe((loggedInStatus: boolean) => {
      this.isLoggedIn = loggedInStatus;
    });
  }

  onLogout() {
    this._authService.logout();
    this.isLoggedIn = false;
    this._router.navigate(['/']);
  }
}
