import { Injectable } from '@angular/core';
import { Iproject, IprojectDetails } from './iproject';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  projects:Iproject[]=[
    {
      name:'La-Quinta-Beach',
      title:'La Quinta Beach Hurghada',
      src:'assets/projects/La-Quinta-beach.jpg',
      statue:'Completed-More than 90% sold',
      area:'4,995 sqm',
      type:'Resort'
    },
    {
      name:'La-Quinta-Suites',
      title:'La Quinta Suites Hurghada',
      src:'assets/projects/La-Quinta-Featured-projects-2.jpg',
      statue:'Under Construction',
      area:'20.000 sqm',
      type:'Hotel Apartments'
    },
    {
      name:'La-Quinta-Heights',
      title:'La Quinta Heights Hurghada',
      src:'assets/projects/La-Quinta-Heights-3.jpg',
      statue:'Under Construction',
      area:'35.000 sqm',
      type:'Residential Compound'
    }
  ];

  allproject:IprojectDetails[]=[
    {
      name: 'La-Quinta-Beach',
      title: 'La Quinta Beach Hurghada',
      src: 'assets/projects/laquinta-beach/La-Quinta-Home1.jpg',
      overview: {
        src: 'assets/projects/La-Quinta-beach.jpg',
        p1:'Discover a new gem of beachfront living in the heart of Hurghada, full of life, charm, and possibilities. La Quinta beach is an exclusive complex. It offers residential units, positioned in a unique location, and features breathtaking sea views, direct beach access, a vast list of luxury facilities and beautiful surroundings.',
        p2:'Located in the east of Egypt, bathed by the warm waters of the Red Sea and surrounded by the mountainous landscape of Hurghada, the beach city stretches for about 36 kilometers (22 mi) along the seashore. It’s blessed with sunny weather year-round, an average temperature of 23°C and little rain, which makes it the best place to own your beachfront home and establish your new life.',
        statue: 'Completed- More than 90% Sold',
        area: '4,995 sqm',
        location: 'Hurghada, Egypt',
        type: 'Resort',
        beach:'Private Beach',
        Delivery:''

      },
      iconssection: {
        header: 'WHERE HOME MEETS LUXURIOUS AMENITIES',
        span: 'Whether you prefer to make amazing waterfront memories or turn a profit, La Quinta comes with a slew of luxury hotel-style amenities:',
        icon: [
          {
            svg: 'assets/projects/laquinta-beach/icons/La-Quinta-Amenities-Lavish-swimming-pools-icon-1.svg.svg',
            text: 'Lavish swimming pools'
          },
          {
            svg: 'assets/projects/laquinta-beach/icons/La-Quinta-Amenities-Steps-from-the-sandy-beach-icon-2.svg',
            text: 'Steps from the sandy beach'
          },
          {
            svg: 'assets/projects/laquinta-beach/icons/La-Quinta-Amenities-Panoramic-sea-view-gym-icon-3.svg',
            text: 'Panoramic sea view gym'
          },
          {
            svg: 'assets/projects/laquinta-beach/icons/La-Quinta-Amenities-Spanish-inspired-beach-lounge-icon-4.svg',
            text: 'Spanish-inspired beach lounge'
          },
          {
            svg: 'assets/projects/laquinta-beach/icons/La-Quinta-Amenities-Exquisite-Spa-icon-5.svg',
            text: 'Exquisite Spa'
          },
          {
            svg: 'assets/projects/laquinta-beach/icons/La-Quinta-Amenities-24-7-Security-icon-6.svg',
            text: '24x7 Security '
          }
        ]
      },
      gallery: [
        'laquinta-beach/gallery/La-Quinta-beach-1.jpg',
        'laquinta-beach/gallery/La-Quinta-beach-2.jpg',
        'laquinta-beach/gallery/La-Quinta-beach-3.jpg',
        'laquinta-beach/gallery/La-Quinta-beach-4.jpg',
        'laquinta-beach/gallery/La-Quinta-beach-5.jpg',
        'laquinta-beach/gallery/La-Quinta-beach-6.jpg',
        'laquinta-beach/gallery/La-Quinta-beach-7.jpg',
        'laquinta-beach/gallery/La-Quinta-beach-8.jpg',

      ],
      adress: 'El Ahiaa Road, Hurghada, Egypt',
      transport: 'La Quinta is conveniently located 10 minutes from Hurghada Airport and 10 Minutes from El Gouna, within quick and easy reach of the city attractions and major town areas. At La Quinta, you get the taste of both worlds, calm and serene resort-style living, as well as the buzz of a well known touristic destination.',
      map:{
        lat: 0,
        lng: 0
      }
    },
    {
      name: 'La-Quinta-Heights',
      title: 'La Quinta Heights Hurghada',
      src: 'assets/projects/La-Quinta-Heights-3.jpg',
      overview: {
        src: 'assets/projects/La-Quinta-Heights-3.jpg',
        p1:'An elegantly planned community of lush villas tucked away in a secluded location away from the city crowd next to Senzo Mall. La Quinta Heights offers a wide range of fully furnished villas in an inspiring setting surrounded by greenery and high-level facilities to make it an ideal haven for a relaxed and safe family life.',
        p2:'La Quinta Heights is the ultimate address for a perfectly balanced lifestyle. Whether it’s spending quality time with family, connecting with nature, or taking in stunning views on a leisurely stroll, this glamorous space is the ideal destination to savor life’s beautiful moments. with peaceful scenic views to offer a contemporary seamless lifestyle.',
        statue: 'Under Construction',
        area: '35,000 sqm',
        location: 'Hurghada, Egypt',
        type: 'Residential Compound',
        beach:'',
        Delivery:'After 2026'

      },
      iconssection: {
        header: 'EXPERIENCE THE STATE-OF-THE-ART AMENITIES.',
        span: 'A gated community is the perfect balance of luxury and comfort, elevating your standard of living with top-of-the-line amenities',
        icon: [
          {
            svg: 'assets/projects/laquinta-heights/icons/La-Quinta-Amenities-Gated-Community-icon.svg',
            text: 'Gated Community'
          },
          {
            svg: 'assets/projects/laquinta-heights/icons/Lavish-swimming-pools.svg',
            text: 'Lavish swimming pools'
          },
          {
            svg: 'assets/projects/laquinta-heights/icons/Fully-integrated-Clubhouse.svg',
            text: 'Fully-integrated Clubhouse'
          },
          {
            svg: 'assets/projects/laquinta-heights/icons/Exquisite-outdoor-gardens.svg',
            text: 'Exquisite outdoor gardens'
          },
          {
            svg: 'assets/projects/laquinta-heights/icons/Spacious-parking-slots.svg',
            text: 'Spacious parking slots'
          },
          {
            svg: 'assets/projects/laquinta-heights/icons/24x7-Security.svg',
            text: '24x7 Security '
          }
        ]
      },
      gallery: [
        'laquinta-heights/gallary/La-Quinta-Heights-1.jpg',
        'laquinta-heights/gallary/La-Quinta-Heights-2.jpg',
        'laquinta-heights/gallary/La-Quinta-Heights-3.jpg',
        'laquinta-heights/gallary/La-Quinta-Heights-4.jpg',
        'laquinta-heights/gallary/La-Quinta-Heights-5.jpg',
        'laquinta-heights/gallary/La-Quinta-Heights-6.jpg',
        'laquinta-heights/gallary/La-Quinta-Heights-7.jpg',
        'laquinta-heights/gallary/La-Quinta-Heights-8.jpg',
        'laquinta-heights/gallary/La-Quinta-Heights-9.jpg',
        'laquinta-heights/gallary/La-Quinta-Heights-10.jpg',
        'laquinta-heights/gallary/La-Quinta-Heights-11.jpg',
        'laquinta-heights/gallary/La-Quinta-Heights-12.jpg',

      ],
      adress: 'Tourism Development Authority Road- In front of Gate 2 Sahl Hasheesh',
      transport: 'La Quinta Heights is conveniently located inform of Sahl Hasheesh Gates, 5 minutes from Senzo Mall, 10 minutes from Hurghada Airport, 10 minutes from Sahl Hasheesh, 20 minutes from Makadi Bay and 30 minutes from Gouna and Soma Bay',
      map:{
        lat: 0,
        lng: 0
      }
    }
  ];

}
