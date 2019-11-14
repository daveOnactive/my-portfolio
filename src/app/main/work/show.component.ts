import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit, OnChanges {
  @Input() show: boolean;
  showMenu: boolean;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.show ? this.showMenu = true : this.showMenu = false;
  }

}
