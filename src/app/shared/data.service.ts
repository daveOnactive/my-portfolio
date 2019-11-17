import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  works: any[] = [
    {
      id: 1,
      title: 'Random Fact Generator',
      discrip: 'This is a web application that generates random fact about maths, year and trivia',
      image: '/assets/images/random fact.PNG'
    },
    {
      id: 2,
      title: 'Pixel Art Maker',
      discrip: 'This is a web application that generates random fact about maths, year and trivia',
      image: '/assets/images/random fact.PNG'
    }
  ];
  constructor() { }

  getWorks() {
    return this.works;
  }
}
