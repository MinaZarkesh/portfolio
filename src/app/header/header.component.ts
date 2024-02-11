import { NgFor, NgIf } from '@angular/common';
import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent  {
  // view: 'desktop' | 'mobile' = 'desktop'; //mobile or desktop



  
  selectedIndex: number = -1; //for active link

  navLinks = [
    {
      href: '#about',
      text: 'About me',
    },
    {
      href: '#skills',
      text: 'Skills',
    },
    {
      href: '#projects',
      text: 'Projects',
    },
    {
      href: '#contact',
      text: 'Contact',
    },
    // {
    //   href: 'Hackathons',
    //   text: 'Hackathons',
    // },
  ];


}
