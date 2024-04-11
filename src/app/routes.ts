import { Routes } from '@angular/router';
import { HomeComponent } from './modules/geral/home/home.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },

  ];
  
  export default routeConfig;