import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CONSTANTS } from './constants/constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    FormsModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constants = CONSTANTS;
  username = 'Inital name defined';
  title = 'angular-learn';

  elements = new Array();

  constructor() {}

  ngOnInit(): void {
    this.createFooterElements();
  }

  createFooterElements() {
    this.elements = [
      {
        title: this.constants.footer.labels.name,
        bootstrap: 'col-md-3 col-lg-4 col-xl-3 mx-auto mb-4',
        content: ` <hr class="mb-4 mt-0 d-inline-block mx-auto custom-hr" />
            <p>
              Hello I'm Aditya Uniyal , a software developer with knowledge in
              HTML , CSS , Javascript , Bootstrap , SASS , Angular18 and OOPS  .
            </p> `,
      },
      {
        title: this.constants.footer.labels.project,
        bootstrap: 'col-md-2 col-lg-2 col-xl-2 mx-auto mb-4',
        content: `
        <hr class="mb-4 mt-0 d-inline-block mx-auto custom-hr" />
            <p>
              <a href="#!" class="text-white">Website Application For a Reg. NGO/Charitable Trust</a>
            </p> 
             
          `,
      },
      {
        title: this.constants.footer.labels.experience,
        bootstrap: 'col-md-3 col-lg-2 col-xl-2 mx-auto mb-4',
        content: `
        <hr class="mb-4 mt-0 d-inline-block mx-auto custom-hr" />
            <p>
        None
            </p>`,
      },
      {
        title: this.constants.footer.labels.contact,
        bootstrap: 'col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4',
        content: `
        <hr class="mb-4 mt-0 d-inline-block mx-auto custom-hr" />
            <p>
              <i class="fas fa-home mr-3"></i
              >&nbsp;${this.constants.footer.labels.address}
            </p>
            <p>
              <i class="fas fa-envelope mr-3"></i
              >&nbsp;${this.constants.footer.labels.email}
            </p>
            <p>
              <i class="fas fa-phone mr-3"></i
              >&nbsp;${this.constants.footer.labels.phNo}
            </p>
        `,
      },
    ];
  }
}
