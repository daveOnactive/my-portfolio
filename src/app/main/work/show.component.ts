import { Component, OnInit, OnChanges, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import * as anime from 'animejs';
import { ActivatedRoute, Data } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit, OnChanges, AfterViewInit {
  tl: any;
  id: any;
  works: any;
  current: any;
  constructor(private route: ActivatedRoute,
              private data: DataService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.works = this.data.getWorks();
    this.current = this.match(this.works, this.id);
  }

  ngAfterViewInit() {
    this.tl = anime.timeline({
      duration: 700,
      easing: 'easeInOutSine'
    });

    this.tl.add({
      targets: '.container',
      rotateX: ['180deg', 0]
    });

    this.tl.add({
      targets: '.wrapper',
      opacity: [0, 1],
    });
  }

  ngOnChanges() {

  }

  match(dataOne, id) {
    return dataOne.filter(work => work.id === +id);
  }

}
