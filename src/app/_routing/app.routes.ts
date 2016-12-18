import { Routes, RouterModule } from '@angular/router';


import { DataResolver } from './../_module/app.resolver';
import {HomeComponent} from "../components/home/home.component";
import {AboutComponent} from "../components/about/about.component";
import {NoContentComponent} from "../components/no-content/no-content.component";


export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'detail', loadChildren: () => System.import('./../+detail/index')
      .then((comp: any) => comp.default),
  },
  { path: '**',    component: NoContentComponent },
];
