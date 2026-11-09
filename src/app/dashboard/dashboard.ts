import { Component, inject } from '@angular/core';
import { GestionarHeroes } from '../servicios/gestionar-heroes';
import { Heroe } from '../heroe';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  heroes?: Heroe[];
  private gestionarHeroes = inject(GestionarHeroes);
  constructor() {
    this.heroes = [];
  }
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(){
    this.gestionarHeroes.getHeroes().subscribe(heroes => this.heroes = heroes.slice(0,4));
  }
}

