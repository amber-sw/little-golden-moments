import { Component } from '@angular/core';
import { ContactBlock } from '../shared/contact-block/contact-block';

@Component({
  selector: 'app-about-page',
  imports: [ContactBlock],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css'
})
export class AboutPage {

  public age:number;
  constructor(){
    const timediff = (Math.abs(Date.now() - new Date('1999-04-19').getTime()));
    this.age = Math.floor((timediff / (1000*3600*24))/365.25);
  }
}
