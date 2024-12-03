import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Iproject } from '../services/iproject';
import { ProjectsService } from '../services/projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-main',
  standalone: true,
  imports: [],
  templateUrl: './projects-main.component.html',
  styleUrl: './projects-main.component.scss'
})
export class ProjectsMainComponent implements OnInit,AfterViewInit {
  @ViewChild('Video') videoElement!: ElementRef<HTMLVideoElement>;
  allproject:Iproject[]=[];
constructor(private projects:ProjectsService ,private route:Router){}
  ngOnInit(): void {
    this.allproject=this.projects.projects;
  }

  ngAfterViewInit(): void {
    if (this.videoElement) {
      const video = this.videoElement.nativeElement;

      video.addEventListener('ended', () => {
        video.currentTime = 0; // Reset video to the start
        video.play().catch((error) => console.error('Playback failed:', error));
      });

  }

  }

  veiwproject(name:string)
  {
    this.route.navigate(["/Project",name])
  }

}

