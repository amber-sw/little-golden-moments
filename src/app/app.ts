import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Jumbotron } from './shared/jumbotron/jumbotron';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Jumbotron],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('little-golden-moments');
}
