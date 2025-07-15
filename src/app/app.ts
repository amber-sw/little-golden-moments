import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Jumbotron } from './shared/jumbotron/jumbotron';
import { Footer } from './footer/footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Jumbotron, Footer, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('little-golden-moments');
}
