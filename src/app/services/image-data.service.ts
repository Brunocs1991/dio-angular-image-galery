import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageDataService {

  constructor() { }

  // servico que use o google imagens e recupere 10 imagens que batam com o titulo digitado
  getImages() {
    return[
      {id:1, title: 'Angular', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'},
      {id:2, title: 'React', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'},
      {id:3, title: 'Vue', url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg'},
      {id:4, title: 'Svelte', url: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg'},
      {id:5, title: 'Ionic', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ionic-logo-landscape.svg/640px-Ionic-logo-landscape.svg.png'},
      {id:6, title: 'Jquery', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/JQuery-Logo.svg'},
      {id:7, title: 'Bootstrap', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg'},
      {id:8, title: 'Typescript', url: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Typescript-logo.png'},
      {id:9, title: 'JavaScript', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Javascript-shield.svg'},
      {id:10, title: 'Css', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'},
    ]
  }

}
