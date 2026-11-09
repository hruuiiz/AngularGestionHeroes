import { Component, inject, OnInit } from '@angular/core';
import { Heroe } from '../heroe';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroeDetalle } from '../heroe-detalle/heroe-detalle';
import { GestionarHeroes } from '../servicios/gestionar-heroes';
import { RouterLink } from '@angular/router';

import {RouterModule, Router } from '@angular/router';

@Component({
  imports: [FormsModule, RouterModule],
  selector: 'app-heroes',
  styleUrl: './heroes.css',
  templateUrl: './heroes.html',
})
export class Heroes implements OnInit {
  servicioGestionarHeroes = inject(GestionarHeroes);
  router= inject(Router);
  heroes?:Heroe[];
  selectedHeroe?: Heroe;


  constructor() {
    this.heroes= [];
 }

  getHeroes(): void {
     this.servicioGestionarHeroes.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
   ngOnInit() {
      this.getHeroes();
  }

  onSelect(heroe: Heroe){
   this.selectedHeroe = heroe;
 }

 mostrarDetalle(idHeroe:number){
      this.router.navigate(['/detalle',idHeroe]);
  }

}

