import { Component, input } from '@angular/core';
import { NgFor } from '@angular/common';
// import { NgM } from '@angular/forms';
import { ProjectModelComponent } from './project-model/project-model.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, ProjectModelComponent, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  constructor(private translate: TranslateService) {
    // Other constructor logic
  }
  projects = [
    {
      img: 'assets/img/simple-crm.svg',
      title: 'Simple CRM',
      subtitle: 'Angular | TypeScript | HTML | CSS | Firebase',

      text: this.translate.instant('portfolio.SIMPLE_CRM'),
      demo: 'https://mina-zarkesh.de/projekte/simple-crm/index.html',
      git: 'https://github.com/minazarkesh',
    }, //Simple CRM
    {
      img: 'assets/img/join.svg',
      title: 'Join',
      subtitle: 'JavaScript | HTML | CSS ',
      text: this.translate.instant('portfolio.JOIN'),
      demo: 'https://mina-zarkesh.de/projekte/join/html/index.html',
      git: 'https://github.com/minazarkesh',
    }, //Join
    {
      img: 'assets/img/sharkie.svg',
      title: 'Sharkie',
      subtitle: 'JavaScript | HTML | CSS',
      text: this.translate.instant('portfolio.SHARKIE'),
      demo: 'https://mina-zarkesh.de/projekte/sharkie/index.html',
      git: 'https://github.com/minazarkesh',
    }, //Sharkie

    // {
    //   img: 'assets/img/pokedex.svg',
    //   title: 'Pokedex',
    //   subtitle: 'JavaScript | HTML | CSS | Api',
    //   text: this.translate.instant('portfolio.POKEDEX'),
    //   demo: 'https://mina-zarkesh.developerakademie.net/Pokedex/pokedex.html',
    // git: 'https://github.com/minazarkesh'
    // }, //Pokedex
    // {
    //   img: 'assets/img/crypto-converter.svg',
    //   title: 'Crypto Converter',
    //   subtitle: 'Angular | TypeScript | RestAPI | HTML | CSS',
    //   text: this.translate.instant('portfolio.CRYPTO_CONVERTER'),
    //   demo: 'https://mina-zarkesh.developerakademie.net/Join-Mina/html/index.html',
    // git: 'https://github.com/minazarkesh'
    // }, //Crypto Converter
  ];
}
