import { Component, OnInit } from '@angular/core';
import Aos from 'aos';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { GoogleMapsModule } from '@angular/google-maps';
import { ProjectsService } from '../services/projects.service';
import { IprojectDetails } from '../services/iproject';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [
    ImageModule,
    GalleriaModule,
    GoogleMapsModule

  ],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent implements OnInit{
    images: any[] | undefined;
    project!:IprojectDetails;
    name: string|null='';
    responsiveOptions: any[] | undefined;
    center: google.maps.LatLngLiteral = { lat: 27.186092332893274, lng: 33.82812083282981 };
    zoom = 12; // Set the zoom level
    constructor(private projectservice:ProjectsService , private route:ActivatedRoute){}
    ngOnInit(): void {
      Aos.init();
           this.name= this.route.snapshot.paramMap.get('name');
           if(this.name!=null)
            {
              this.getProjectDetails(this.name)
            }

      this.responsiveOptions = [
          {
              breakpoint: '1024px',
              numVisible: 5
          },
          {
              breakpoint: '768px',
              numVisible: 3
          },
          {
              breakpoint: '560px',
              numVisible: 1
          }
      ];
    }

    getProjectDetails(name: string) {
      const projectdetails = this.projectservice.allproject.find(proj=>proj.name === name);
      if(projectdetails)
      {
        this.project=projectdetails;
      }
    }


}
