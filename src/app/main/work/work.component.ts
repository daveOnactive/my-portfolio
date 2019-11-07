import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements AfterViewInit {

  constructor() { }



  ngAfterViewInit() {
    anime({
      targets: '.pr',
      opacity: [0, 1],
      scale: [0, 1],
      duration: 1000,
      delay: 50
    });
  }

}
