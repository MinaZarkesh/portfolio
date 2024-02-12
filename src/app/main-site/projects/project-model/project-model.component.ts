import { NgIf, NgClass, CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-project-model',
  standalone: true,
  imports: [NgIf, NgClass , CommonModule],
  templateUrl: './project-model.component.html',
  styleUrl: './project-model.component.scss'
})
export class ProjectModelComponent {
  @Input() project: any; // Define the input property 'project'
  @Input() index: any; // Define the input property 'index'
  // Other component logic

  toProject(link:string){
    window.open(link);
  }

  toGithub(){
    window.open('https://github.com/minazarkesh');
  }

}
