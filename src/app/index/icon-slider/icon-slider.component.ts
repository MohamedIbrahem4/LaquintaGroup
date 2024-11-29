import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { HomeServicesService } from '../services/home-services.service';
import { Iconslider } from '../services/iconslider';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-icon-slider',
  standalone: true,
  imports: [
    CarouselModule,
  ],
  templateUrl: './icon-slider.component.html',
  styleUrl: './icon-slider.component.scss'
})
export class IconSliderComponent implements OnInit {
  responsiveOptions: any[] | undefined;
  icons: Iconslider[]=[];
  sanitizedSvgs: SafeHtml[] = [];

constructor(private homeservice:HomeServicesService,private sanitizer: DomSanitizer){}
  ngOnInit(): void {
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  this.icons =this.homeservice.iconSlider;
  this.sanitizedSvgs = this.homeservice.iconSlider.map((icon)=>
    this.sanitizer.bypassSecurityTrustHtml(icon.SVG)
);

}
svgcontent(svg: string): SafeHtml {
  return this.sanitizer.bypassSecurityTrustHtml(svg);
}


}
