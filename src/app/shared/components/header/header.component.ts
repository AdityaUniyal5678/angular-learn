import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from '../../../constants/constants';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { MenuItem } from '../../../interfaces/menu-item';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constants = CONSTANTS;
  navList!: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.createDynamicNavList();
  }

  /** Description placeholder */
  createDynamicNavList(): void {
    this.navList = [
      {
        id: 1,
        item: this.constants.header.labels.home,
        href: 'home',
      },
      {
        id: 2,
        item: this.constants.header.labels.about,
        href: 'about',
      },
      {
        id: 3,
        item: this.constants.header.labels.portfolio,
        href: 'portfolio',
      },
      {
        id: 4,
        item: this.constants.header.labels.contact,
        href: 'contact',
      },
      {
        id: 5,
        item: this.constants.header.labels.register,
        href: 'register',
      },
      {
        id: 6,
        item: this.constants.header.labels.login,
        href: 'login',
      },
    ];
  }
}
