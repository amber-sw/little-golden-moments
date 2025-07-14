import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'jumbotron',
  imports: [],
  templateUrl: './jumbotron.html',
  styleUrl: './jumbotron.css'
})
export class Jumbotron {
  public menuState = false;

  constructor(){};


  toggleMenu() {
    this.menuState = !this.menuState;
    console.log(this.menuState);
  }
  
  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      document.querySelectorAll('.navbar').forEach((c) => {
        c.classList.add('navbar-options-opaque');
        c.classList.remove('navbar-options-transparent');
      });
    } else {
      document.querySelectorAll('.navbar').forEach((c) => {
        c.classList.remove('navbar-options-opaque');
        c.classList.add('navbar-options-transparent');
      });
    }

  }

}
