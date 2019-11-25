import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../app.animation';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [slideInAnimation]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
