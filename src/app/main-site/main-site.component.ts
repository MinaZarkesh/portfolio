import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { HackathonsComponent } from './hackathons/hackathons.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';



@Component({
  selector: 'app-main-site',
  standalone: true,
  imports: [HeroComponent, AboutComponent, HackathonsComponent, SkillsComponent, ProjectsComponent, ContactComponent],
  templateUrl: './main-site.component.html',
  styleUrl: './main-site.component.scss'
})
export class MainSiteComponent {

 

}
