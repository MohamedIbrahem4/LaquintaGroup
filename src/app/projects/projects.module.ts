import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsMainComponent } from './projects-main/projects-main.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';


const routes: Routes = [
  { path: 'Projects', component: ProjectsMainComponent ,pathMatch:'full' },
  { path: 'Project/:name', component: ProjectDetailsComponent ,pathMatch:'full' },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ],
exports:[RouterModule]
})
export class ProjectsModule { }
