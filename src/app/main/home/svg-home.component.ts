import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-svg-home',
  templateUrl: './svg-home.component.html',
  styleUrls: ['./svg-home.component.scss']
})
export class SvgHomeComponent implements AfterViewInit {
  something;

  constructor() { }

  ngAfterViewInit() {
    anime({
      targets: '#svg path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 400,
      delay: (el, i) => { return i * 450 }
    });
  }

}
