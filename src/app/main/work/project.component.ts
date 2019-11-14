import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements AfterViewInit {
  tl: any;
  show: boolean;
  works: any[] = [
    {
      id: 1,
      title: 'Random Fact Generator',
      discrip: 'This is a web application that generates random fact about maths, year and trivia',
      image: '/assets/images/random fact.PNG'
    }
  ];

  constructor() { }

  ngAfterViewInit() {
    anime({
      tragets: '.carrier',
      opacity: [0, 1],
      scale: [0, 1],
      duration: 1000,
      delay: 50
    });

    // this.tl = anime({
    //   tragtes: '.wrapper',
    //   width: 1000,
    //   height: 500,
    //   duration: 700,
    //   autoplay: false
    // });
  }

  showPopUp() {
    // this.show = true;
  }

}

