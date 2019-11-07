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
      delay: 100
    });
    t1.add({
      targets: '.image img',
      scale: [0, 1],
      duration: 4000
    });
    t1.add({
      targets: '.ctn',
      opacity: [0, 1],
      translateY: [100, 0],
      duration: 500
    });

    anime({
      targets: '.abt',
      opacity: [0, 1],
      scale: [0, 1],
      duration: 1000,
      delay: 50
    });
  }

}
