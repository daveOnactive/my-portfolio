import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    anime({
      targets: 'button',
      scale: [0, 1],
      delay: 600
    });
  }

}
