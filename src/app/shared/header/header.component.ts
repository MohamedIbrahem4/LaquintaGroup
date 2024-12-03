import { CommonModule } from '@angular/common';
import {  Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import  AOS from 'aos';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit  {
  isScrollingDown = false;
  private lastScrollTop = 0;
  isAtTop = false; // Tracks if the user is at the top of the page
  isMobile = false;
  whatsappNumber: string = '+201205285555';
preFilledMessage: string = 'Hello, wellcome to La Quinta Group service.';

  constructor()
  {}

  ngOnInit(): void {
    AOS.init( );


  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrollingDown = scrollTop > this.lastScrollTop;
    this.isAtTop = scrollTop === 0;
  }

  getWhatsAppLink(): string {
    const encodedMessage = encodeURIComponent(this.preFilledMessage);
    return `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
  }

}
