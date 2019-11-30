import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  works: any[] = [
    {
      id: 1,
      title: 'Movie Checkout',
      discrip: 'These a web application that allows user to get information about newly published movies and also search any movie',
      image: 'https://res.cloudinary.com/chidi6ix/image/upload/v1574208964/netflix_hwdxgw.png',
      type: false,
      github: 'https://github.com/daveOnactive/mini-netflix-app',
      link: 'https://moviecheckout.netlify.com'
    },
    {
      id: 2,
      title: 'Pixel Art Maker',
      discrip: 'These a simple online pixel art editor to help you make pixel art easily.',
      image: 'https://res.cloudinary.com/chidi6ix/image/upload/v1574208925/pixel_lxayg7.png',
      type: true,
      github: 'https://github.com/daveOnactive/pixel-art-maker',
      link: 'https://brave-mclean-156fc0.netlify.com/dist/'
    },
    {
      id: 3,
      title: 'My Portfolio',
      discrip: 'This is my portfolio which i built with love',
      image: 'https://res.cloudinary.com/chidi6ix/image/upload/v1574208936/port_hcmusm.png',
      type: false,
      github: 'https://github.com/daveOnactive/my-portfolio',
      link: ''
    },
    {
      id: 4,
      title: 'Bookmarker Web App',
      discrip: 'A bookmarker application to save your favorite website',
      image: '/assets/images/bookmarker.PNG',
      type: false,
      github: 'https://github.com/daveOnactive/bookmarker-application',
      link: 'http://half-smash.surge.sh/'
    },
    {
      id: 5,
      title: 'Random Fact Generator',
      discrip: 'These a web application that generates random fact about maths, year and trivia',
      image: 'https://res.cloudinary.com/chidi6ix/image/upload/v1574208938/random_fact_omvcpi.png',
      type: true,
      github: 'https://github.com/daveOnactive/random-fact-generator',
      link: 'http://organic-nail.surge.sh/'
    },

    {
      id: 6,
      title: 'Todo list App',
      discrip: 'Alc4.0 Rivers project ..Simple Todo list app to help you schedule your daily routine ',
      image: 'https://res.cloudinary.com/chidi6ix/image/upload/v1574208939/t1_aui590.png',
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
