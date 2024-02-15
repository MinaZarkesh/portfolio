import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})

export class SkillsComponent {

  toContact() {
    window.location.href = '#contact';
  }
  
  icon = {
    img: '',
    text: ''
  }

  icons = [
    {
      img: 'assets/img/javaScript.svg',
      text: 'JavaScript'
    },
    {
      img: 'assets/img/angular.svg',
      text: 'Angular'
    },
    {
      img: 'assets/img/typescript.svg',
      text: 'TypeScript'
    },
    {
      img: 'assets/img/html.svg',
      text: 'HTML'
    },
    {
       img: 'assets/img/git-icon.svg',
      text: 'GIT'
    },
    {
       img: 'assets/img/firebase.svg',
      text: 'Firebase'
    },
    {
       img: 'assets/img/css.svg',
      text: 'CSS'
    },
    {
       img: 'assets/img/scrum.svg',
      text: 'Scrum'
    },
    {
       img: 'assets/img/api.svg',
      text: 'Rest-Api'
    },
    {
      img: 'assets/img/material-design.svg',
      text: 'Material Design'
    }
  ]

}
