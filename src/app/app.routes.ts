import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainSiteComponent } from './main-site/main-site.component';
import { ImpressumComponent } from './impressum/impressum.component';

export const routes: Routes = [
{path: '', title: 'Home', component:MainSiteComponent},
{path: 'home', title: 'Home', component:MainSiteComponent},
{path: 'impressum', title: 'Home', component:ImpressumComponent},
];
