import { Component, input } from '@angular/core';
import { NgFor } from '@angular/common';
// import { NgM } from '@angular/forms';
import { ProjectModelComponent } from './project-model/project-model.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, ProjectModelComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
projects = [
  {
    img: 'assets/img/join.svg',
    title: 'Join',
    subtitle: 'Angular | TypeScript | HTML | CSS | Firebase',
    text: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',  
  }, //Join
  {
    img: 'assets/img/sharkie.svg',
    title: 'Sharkie',
    subtitle: 'JavaScript | HTML | CSS',
    text: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',  
  }, //Sharkie
  {
    img: 'assets/img/simple-crm.svg',
    title: 'Simple CRM',
    subtitle: 'JavaScript | HTML | CSS',
    text: 'A very Simple Customer Relationship Management system working with CRUD functionality.',  
  }, //Simple CRM
  {
    img: 'assets/img/pokedex.svg',
    title: 'Pokedex',
    subtitle: 'JavaScript | HTML | CSS | Api',
    text: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',  
  }, //Pokedex
  {
    img: 'assets/img/crypto-converter.svg',
    title: 'Crypto Converter',
    subtitle: 'Angular | TypeScript | RestAPI | HTML | CSS',
    text: 'Simple currency converter based on a public API displaying exchange rate charts.',  
  } //Crypto Converter
]
}
