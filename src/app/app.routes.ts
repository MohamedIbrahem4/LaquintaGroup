import {  Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/Home' },
  {
    path: '',
    component: LayoutComponent,
    children: [
    {  path: '',
      loadChildren: () => import('./index/index.module').then(m => m.IndexModule)
    },
    {  path: '',
      loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
    }

  ]
  },





];

