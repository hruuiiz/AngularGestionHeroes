import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Heroes } from './heroes/heroes';
import { Dashboard } from './dashboard/dashboard';
import { HeroeDetalle } from './heroe-detalle/heroe-detalle';

export const routes: Routes = [
  {path: 'heroes', component: Heroes},
  {path: 'dashboard', component: Dashboard},
  { path: 'detalle/:id', component: HeroeDetalle },
  { path: '', redirectTo:  '/dashboard', pathMatch: 'full'}
];
