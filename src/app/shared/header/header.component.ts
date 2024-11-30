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


}
