import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, AfterViewInit {
  tl: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750,
      autoplay: false
    });

    this.tl.add({
      targets: '.showcase',
      scale: [1, 0]
    });
    this.tl.add({
      targets: '.carrier',
      width: 700,
      height: 300
    });
    this.tl.add({
      targets: '.content',
      y: 0,
      opacity: [0, 1]
    })
  }

  anime() {
    this.tl.play();
  }

  // showMenu() {
  //   this.anime('frwd');
  //   console.log('helo');
  // }

}
