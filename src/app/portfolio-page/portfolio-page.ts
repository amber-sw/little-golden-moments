import { Component } from '@angular/core';
import { Lightbox, LightboxModule, LightboxEvent, LIGHTBOX_EVENT } from 'ngx-lightbox';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio-page',
  imports: [LightboxModule],
  templateUrl: './portfolio-page.html',
  styleUrl: './portfolio-page.css'
})
export class PortfolioPage {
  public _album:Array<any> = [];
  private _subscription: Subscription;

  constructor(private _lightbox: Lightbox, private _lightboxEvent: LightboxEvent) {
    for (let i = 1; i <= 15; i++) {
      const src = '/assets/portfolio/image-' + i + '.jpg';
      console.log(src);
      const caption = 'Image ' + i + ' caption here';
      const thumb = '/assets/portfolio/image-' + i + '.jpg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };

      this._album.push(album);
    }
  }

  open(index: number): void {
    // open lightbox
    console.log(index);
    this._subscription = this._lightboxEvent.lightboxEvent$
    .subscribe(event => this._onReceivedEvent(event));
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  private _onReceivedEvent(event: any): void {
    // remember to unsubscribe the event when lightbox is closed
    if (event.id === LIGHTBOX_EVENT.CLOSE) {
      // event CLOSED is fired
      this._subscription.unsubscribe();
    }

    if (event.id === LIGHTBOX_EVENT.OPEN) {
      // event OPEN is fired
    }

    if (event.id === LIGHTBOX_EVENT.CHANGE_PAGE) {
      // event change page is fired
      console.log(event.data); // -> image index that lightbox is switched to
    }
  }
}
