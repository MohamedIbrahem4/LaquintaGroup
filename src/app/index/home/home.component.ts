import { Component, OnInit } from '@angular/core';
import Aos from 'aos';
import { ImageModule } from 'primeng/image';
import { HomeServicesService } from '../services/home-services.service';
import { SliderComponent } from "../../shared/slider/slider.component";
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ImageModule,
    SliderComponent,
    CommonModule
],
animations:[
  trigger('fadeSlide', [
    transition(':increment', [
      style({ opacity: 0, transform: 'translateX(0%)' }),
      animate('.5s linear', style({ opacity: 1, transform: 'translateX(0)' }))
    ]),
    transition(':decrement', [
      style({ opacity: 0, transform: 'translateX(0%)' }),
      animate('.5s linear', style({ opacity: 1, transform: 'translateX(0)' }))
    ]),
  ]),
  trigger('slideInOut', [
    transition(':increment', [
      style({ opacity: 0, transform: 'translateX(-100%)' }),
      animate('.5s linear', style({ opacity: 1, transform: 'translateX(0)' }))
    ]),
    transition(':decrement', [
      style({ opacity: 0, transform: 'translateX(100%)' }),
      animate('.5s linear', style({ opacity: 1, transform: 'translateX(0)' }))
    ]),
  ]),
]
,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',


})
export class HomeComponent  implements OnInit{
project:any[]=[];
currentIndexs3 = 0;
direction: 'forward' | 'backward' = 'forward';
animationKey = 0; // Unique key to force animation re-trigger
sanitizedContent!: SafeHtml;


  constructor(private homeservice:HomeServicesService,private sanitizer: DomSanitizer){}
  ngOnInit(): void {
    Aos.init();
    this.project=this.homeservice.projects;
    this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.homeservice.section3[0].svg);

  }
  get currentImage() {
    return this.homeservice.section3[this.currentIndexs3].src;
  }
  get currentContent() {
    return this.homeservice.section3[this.currentIndexs3];

  }
  nextItem() {
    this.currentIndexs3 = (this.currentIndexs3 - 1 + this.homeservice.section3.length) % this.homeservice.section3.length;
  }
  setCurrentContent(htmlContent: string) {
    // Use DomSanitizer to mark the HTML as safe

    this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(htmlContent);
  }

  // Method to navigate to the previous item
  prevItem() {
    this.direction = 'backward';
    this.animationKey++; // Increment to re-trigger animation
    this.currentIndexs3 = (this.currentIndexs3 - 1 + this.homeservice.section3.length) % this.homeservice.section3.length;

  }


}
