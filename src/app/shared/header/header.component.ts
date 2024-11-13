import { AfterViewInit, Component, OnInit } from '@angular/core';
import  AOS from 'aos';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit  {
  ngOnInit(): void {
    AOS.init(
      {duration: 1200,
      once: true}

    );
    console.log("AOS Initialized");

  }

}
