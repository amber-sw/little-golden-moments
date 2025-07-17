import { Component } from '@angular/core';
import { ContactBlock } from '../shared/contact-block/contact-block';

@Component({
  selector: 'app-portfolio-page',
  imports: [ContactBlock],
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
