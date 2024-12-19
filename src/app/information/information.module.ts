import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { InsightsComponent } from './insights/insights.component';


const routes: Routes = [
  { path: 'About-Us', component: AboutUsComponent },
  { path: 'Contact', component: ContactUsComponent },
  { path: 'Insights', component: InsightsComponent },


]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ],
  exports:[RouterModule]

})
export class InformationModule { }
