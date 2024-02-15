import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgFor, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  icons = [
    {
      img: 'assets/img/github.png',
      link: 'https://github.com/minazarkesh',
    },
    {
      img: 'assets/img/email.png',
      link: 'mailto:mzarkesh@gmx.de',
    },
    {
      img: 'assets/img/linkedin.png',
      link: 'https://www.linkedin.com/in/mina-zarkesh/',
    },
  ];
  
  toContact() {
    window.location.href = '#contact';
  }
}
