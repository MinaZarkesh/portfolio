import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainSiteComponent } from './main-site/main-site.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
export const routes: Routes = [
{path: '', component:MainSiteComponent},
{path: 'home',  component:MainSiteComponent},
{path: 'imprint', component:ImpressumComponent},
{path: 'privacypolicy', component: DatenschutzComponent}
];
