import { Component } from '@angular/core';
import { ContactBlock } from '../shared/contact-block/contact-block';

@Component({
  selector: 'app-about-page',
  imports: [ContactBlock],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css'
})
export class AboutPage {

}
