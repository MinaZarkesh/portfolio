import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-project-model',
  standalone: true,
  imports: [],
  templateUrl: './project-model.component.html',
  styleUrl: './project-model.component.scss'
})
export class ProjectModelComponent {
  @Input() project: any; // Define the input property 'project'
  // Other component logic
}
