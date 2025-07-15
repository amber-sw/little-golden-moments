import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  public menuState = false;

  constructor(){};


  toggleMenu() {
    this.menuState = !this.menuState;
  }
  
  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 150) {
      document.querySelectorAll('.navbar').forEach((c) => {
        c.classList.add('navbar-options-opaque');
        c.classList.remove('navbar-options-transparent');
      });
    } else {
      document.querySelectorAll('.navbar').forEach((c) => {
        c.classList.add('navbar-options-transparent');
        c.classList.remove('navbar-options-opaque');
      });
    }

  }

}
