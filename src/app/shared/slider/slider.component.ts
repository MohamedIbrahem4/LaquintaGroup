import { Component, OnDestroy, OnInit } from '@angular/core';
import { animate, group, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import Aos from 'aos';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  animations: [
    // Main Slide Animation
    trigger('slideAnimation', [
      state('inactive', style({ display:'none', opacity: 0, transform: 'translateY(0%) ' })),
      state('active', style({display:'flex', opacity: 1, transform: 'translateX(0) scale(1)' })),

      transition('inactive => active', [
        // Slide in and fade in

          style({ display: 'flex', opacity: 0 }), // Make it visible but transparent at start
          animate('1500ms ease-in', style({ opacity: 1,transform: 'translate(0%) ' })),
          // animate('1500ms ease-out', style({ opacity: 1 })),



      ]),

      // Transition from 'active' to 'inactive'
      transition('active => inactive', [
        // Slide out and fade out
        animate('3000ms ease-out', style({  opacity: 0,transform: 'translate(0%) '  })),
        style({ display: 'none' }) // Set display to none after fade-out

      ]),
    ]),


  ],


})
export class SliderComponent implements OnInit ,OnDestroy {
  slides = [
    {
      image: 'assets/Index/slider/La-Quinta-slider-1.jpg',
      number: '1',
    },
    {
      image: 'assets/Index/slider/La-Quinta-slider-2.jpg',
      number: '2',
    },
    {
      image: 'assets/Index/slider/La-Quinta-slider-3.jpg',
      number: '3',
    },
    {
      image: 'assets/Index/slider/La-Quinta-slider-4.jpg',
      number: '4',
    },
  ];

  currentSlide = 0;
  intervalId: any;
  constructor(private route:Router){}
  //to clear setinterval when i move from page to another
  ngOnDestroy(): void {
    this.stopAutoSlide();
  }
  ngOnInit(): void {
    this.startAutoSlide();
    Aos.init( );

  }
  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 10000);
  }
  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    const animatedElements = document.querySelectorAll('.aos-wrapper [data-aos]');
    // Remove the `data-aos` attribute temporarily to reset animations
    animatedElements.forEach((element) => {
      element.classList.remove('aos-init', 'aos-animate'); // Remove both classes
    });
    setTimeout(() => {
      animatedElements.forEach((element) => {
        element.classList.add('aos-init', 'aos-animate'); // Re-add both classes
      });
    },2000); // Adjust the delay as needed

    // Refresh AOS to apply the animations on the new slide
     Aos.refresh();


  }
  callUs() {
    window.location.href = 'tel:+201205285555';
  }
  veiwproject(name:string)
  {
    this.route.navigate(["/Project",name])
  }


}
