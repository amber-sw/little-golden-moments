import { Component } from '@angular/core';

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

}
