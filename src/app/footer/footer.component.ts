import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {  RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor, RouterLink, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  
  icons = [
    {
      img: 'assets/img/github.png',
      link: 'https://github.com/minazarkesh',
    },
    {
      img: 'assets/img/email.png',
      link: 'mailto:contact@mina-zarkesh.de',
    },
    {
      img: 'assets/img/linkedin.png',
      link: 'https://www.linkedin.com/in/mina-zarkesh/',
    },
  ];
}
