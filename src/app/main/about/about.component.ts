import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  image: any = 'assets/images/bart-simpson-png-39265.png';

  constructor() { }
  ngAfterViewInit() {
    const t1 = anime.timeline({
      // delay: 100
      duration: 1000
    });
    t1.add({
      targets: '.image img',
      opacity: [0, 1],
      translateY: [-50, 0],
      delay: 800
    });
    t1.add({
      targets: '.ctn',
      opacity: [0, 1],
      scale: [1.5, 1],
    });

    anime({
      targets: '.abt',
      opacity: [0, 1],
      scale: [0, 1],
      duration: 1000,
      delay: 1000
    });
  }

}
