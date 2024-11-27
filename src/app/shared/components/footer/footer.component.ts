import { Component, Input, OnInit } from '@angular/core';
import { CONSTANTS } from '../../../constants/constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  constants = CONSTANTS;
  
  @Input() KhaliArray= new Array();

  ngOnInit(): void {
  
  }
}
