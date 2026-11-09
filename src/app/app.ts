import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Heroes } from './heroes/heroes';

@Component({
  imports: [RouterOutlet, RouterModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly titulo = 'HOLAasdadsdas';
}
