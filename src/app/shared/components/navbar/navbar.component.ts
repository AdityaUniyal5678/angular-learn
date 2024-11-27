import { Component, Input } from '@angular/core';
import { CONSTANTS } from '../../../constants/constants';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MenuItem } from '../../../interfaces/menu-item';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() menuItems!: MenuItem[];
  constants = CONSTANTS;
}
