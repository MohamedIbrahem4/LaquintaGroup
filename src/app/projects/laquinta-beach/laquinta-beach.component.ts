import { Component, OnInit } from '@angular/core';
import Aos from 'aos';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { GoogleMapsModule } from '@angular/google-maps';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-laquinta-beach',
  standalone: true,
  imports: [
    ImageModule,
    GalleriaModule,
    GoogleMapsModule

  ],
  templateUrl: './laquinta-beach.component.html',
  styleUrl: './laquinta-beach.component.scss'
})
export class LaquintaBeachComponent implements OnInit{
  images: any[] | undefined;
  responsiveOptions: any[] | undefined;
  center: google.maps.LatLngLiteral = { lat: 27.186092332893274, lng: 33.82812083282981 };
  zoom = 12; // Set the zoom level
  constructor(private projectservice:ProjectsService){}
  ngOnInit(): void {
    Aos.init();
    this.images =this.projectservice.Galleryimages;
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


}
