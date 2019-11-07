import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as anime from 'animejs';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {

  constructor() { }


  ngAfterViewInit() {
    anime({
      targets: '.con',
      opacity: [0, 1],
      scale: [0, 1],
      duration: 1000,
      delay: 50
    });
  }

}
