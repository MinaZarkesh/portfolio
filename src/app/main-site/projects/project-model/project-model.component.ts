import { NgIf, NgClass, CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import  AOS from 'aos';

@Component({
  selector: 'app-project-model',
  standalone: true,
  imports: [NgIf, NgClass , CommonModule, TranslateModule],
  templateUrl: './project-model.component.html',
  styleUrl: './project-model.component.scss'
})
export class ProjectModelComponent  implements OnInit {
  @Input() project: any; // Define the input property 'project'
  @Input() index: any; // Define the input property 'index'
  // Other component logic


  ngOnInit(): void {
    // Initialization logic here
   
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    AOS.init();
  }

  toProject(link:string){
    window.open(link);
  }

  toGithub(link:string){
    window.open(link);
  }



}
