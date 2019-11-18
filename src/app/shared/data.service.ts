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
      image: '/assets/images/random fact.PNG',
      type: true,
      github: 'https://github.com/daveOnactive/random-fact-generator',
      link: 'http://organic-nail.surge.sh/'
    },
    {
      id: 2,
      title: 'Pixel Art Maker',
      discrip: 'This is a simple online pixel art editor to help you make pixel art easily.',
      image: '/assets/images/pixel.PNG',
      type: true,
      github: 'https://github.com/daveOnactive/pixel-art-maker',
      link: 'https://brave-mclean-156fc0.netlify.com/dist/'
    },

    {
      id: 3,
      title: 'Bookmarker Web App',
      discrip: 'A bookmarker application to save your favorite website',
      image: '/assets/images/bookmarker.PNG',
      type: false,
      github: 'https://github.com/daveOnactive/bookmarker-application',
      link: 'http://half-smash.surge.sh/'
    },

    {
      id: 4,
      title: 'Todo list App',
      discrip: 'Alc4.0 Rivers project ..Simple Todo list app to help you schedule your daily routine ',
      image: '/assets/images/t1.PNG',
      type: true,
      github: 'https://github.com/daveOnactive/todo-list',
      link: 'https://ethereal-love.surge.sh/'
    },
  ];
  constructor() { }

  getWorks() {
    return this.works;
  }
}
