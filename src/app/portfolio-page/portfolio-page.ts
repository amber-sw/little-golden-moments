import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-page',
  imports: [],
  templateUrl: './portfolio-page.html',
  styleUrl: './portfolio-page.css'
})
export class PortfolioPage {
  public _album:Array<any> = [];

  constructor() {
    for (let i = 1; i <= 15; i++) {
      const src = '/assets/portfolio/image-' + i + '.jpg';
      const thumb = '/assets/portfolio/image-' + i + '.jpg';
      const album = {
         src: src,
         thumb: thumb
      };

      this._album.push(album);
    }
  }
}
