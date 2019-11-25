import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as anime from 'animejs';

@Component({
  // selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  constructor() { }


  ngAfterViewInit() {
    anime({
      targets: '.hm',
      opacity: [0, 1],
      scale: [0, 1],
      duration: 1000,
      delay: 1000
    });
  }

}
