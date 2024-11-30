import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LaquintaBeachComponent } from './laquinta-beach/laquinta-beach.component';
import { ProjectsMainComponent } from './projects-main/projects-main.component';


const routes: Routes = [
  { path: 'LaquintaBeach-Hurgada', component: LaquintaBeachComponent },
  { path: 'Projects', component: ProjectsMainComponent },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
exports:[RouterModule]
})
export class ProjectsModule { }
