import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServicesService {

  constructor() { }
  Galleryimages: any[] = [
    'La-Quinta-beach-1.jpg',
    'La-Quinta-beach-2.jpg',
    'La-Quinta-beach-3.jpg',
    'La-Quinta-beach-4.jpg',
    'La-Quinta-beach-5.jpg',
    'La-Quinta-beach-6.jpg',
    'La-Quinta-beach-7.jpg',
    'La-Quinta-beach-8.jpg',

  ];

  projects:any[]=[
    {
      src:'assets/projects/La-Quinta-beach.jpg',
      h2:'La Quinta Beach Hurghada',
      p:'Hurghada, Egypt'
    },
    {
      src:'assets/projects/La-Quinta-Featured-projects-2.jpg',
      h2:'La Quinta Suites Hurghada',
      p:'Hurghada, Egypt'
    },
    {
      src:'assets/projects/La-Quinta-Heights-3.jpg',
      h2:'La Quinta Heights Hurghada',
      p:'Hurghada, Egypt'
    }
  ]

  section3:any[]=[
    {
      src:'assets/Index/section3/1.jpg',
      icon:'',
      h3:'COMPETING TO PROGRESS',
      p:'La Quinta is committed to creating and perseveringly developing peerless work of world-class real estate projects that make the Red Sea compete with global architecture projects and yet to be a destination of choice.'

    },
    {
      src:'assets/Index/section3/2.jpg',
      icon:'',
      h3:'HELPING TO DISCOVER',
      p:'The diversity and uniqueness of the communities that La Quinta creates for people extend with well-designed and coveted lifestyle experiences in waterfront, urban and suburban locations.'
    },
    {
      src:'assets/Index/section3/3.jpg',
      icon:'',
      h3:'BUILDING TO LAST',
      p:'With the emphasis on robustly establishing the infrastructure and innovatively building the best-in-class residential and land projects ensuring the craft of liveable arts that last forever.'

    },
    {
      src:'assets/Index/section3/4.jpg',
      icon:'',
      h3:'A TRADEMARK TO TRUST',
      p:'La Quinta has always been known for timely delivery, commitment and conforming to quality standards, and keeping a clean environment thus growing to be a reliable real estate trademark.'

    }
  ]


}
