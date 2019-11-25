import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements AfterViewInit {
  tl: any;
  constructor() { }



  ngAfterViewInit() {
    this.tl = anime.timeline({
      duration: 700
    });

    this.tl.add({
      targets: '.pr',
      opacity: [0, 1],
      scale: [0, 1],
      duration: 1000,
      // delay: 50
    });

    // this.tl.add({
    //   targets: '.container',
    //   opacity: [0, 1],
    //   translateY: [50, 0]
    // })
  }

}
