import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { HackathonsComponent } from './hackathons/hackathons.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { Aboutv2Component } from './aboutv2/aboutv2.component';



@Component({
  selector: 'app-main-site',
  standalone: true,
  imports: [HeroComponent, AboutComponent, Aboutv2Component, HackathonsComponent, SkillsComponent, ProjectsComponent, ContactComponent],
  templateUrl: './main-site.component.html',
  styleUrl: './main-site.component.scss'
})
export class MainSiteComponent {

 

}
