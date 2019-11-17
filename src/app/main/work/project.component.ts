import { Component, OnInit, AfterViewInit, Output } from '@angular/core';
import * as anime from 'animejs';
import { EventEmitter } from 'events';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements AfterViewInit {
  tl: any;
  show: boolean;
  works = this.work.getWorks();
  constructor(private work: DataService) { }

  ngAfterViewInit() {
    anime({
      tragets: 'h3',
      scale: [1, 0],
      duration: 1000
    });
  }

}

