import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Output } from '@angular/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    CommonModule,
    RouterLink,
    HttpClientModule,
    TranslateModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // view: 'desktop' | 'mobile' = 'desktop'; //mobile or desktop

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'de-du', 'de-sie']);
    this.translate.setDefaultLang('de-du');
  }

  active_language: string = 'de-du';

  switchLanguage(language: string) {
    this.translate.use(language);
    this.active_language = language;
  }
  
  tempLang: boolean = true;

  toggleLanguage(tempLang: boolean) {
    let translationBtn = document.getElementById('translationBtn');
    if (tempLang) {
      this.switchLanguage('en');
      if (translationBtn) {
        translationBtn.innerHTML = /*html*/ `
          Deutsch <img style="width: 16px"  id="langFlag" src="assets/img/german.png" alt="Deutsch">
        `;
      }
    } else {
      this.switchLanguage('de-du');
      if (translationBtn) {
        translationBtn.innerHTML = /*html*/ `
        English <img style="width: 16px" id="langFlag" src="assets/img/united-kingdom.png" alt="English">
      `;
      }
    }
    tempLang = !tempLang;
    this.tempLang = tempLang;
  }

  @Output() selectedIndex: number = -1; //for active link

  navLinks = [
    {
      href: '#about',
      text: this.translate.instant('header.ABOUT'),
    },
    // {
    //   href: '#skills',
    //   text: this.translate.instant('header.SKILLS'),
    // },
    {
      href: '#projects',
      text: this.translate.instant('header.PORTFOLIO'),
    },
    {
      href: '#contact',
      text: this.translate.instant('header.CONTACT'),
    },
    // {
    //   href: 'Hackathons',
    //   text: 'Hackathons',
    // },
  ];
}
