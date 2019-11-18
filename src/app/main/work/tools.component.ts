import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
  @Input()show;
  constructor() { }

  ngOnInit() {
  }

}
