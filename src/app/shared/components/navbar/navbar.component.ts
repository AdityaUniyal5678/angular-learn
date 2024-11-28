import { Component, Inject, Input, OnInit } from '@angular/core';
import { CONSTANTS } from '../../../constants/constants';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MenuItem } from '../../../interfaces/menu-item';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  isloggedin = false;
  constructor(
    private userService: UserService,
    public authService: AuthService
  ) {}
  ngOnInit(): void {
    this.isloggedin = this.userService.isUserLoggedIn();
  }
  @Input() menuItems!: MenuItem[];
  constants = CONSTANTS;

  logout(): void {
    this.authService.logout();
  }
}
