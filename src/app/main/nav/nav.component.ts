import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menu = false;

  constructor() { }

  showMenu() {
    this.menu = !this.menu;
  }

  ngOnInit() {
  }

}
