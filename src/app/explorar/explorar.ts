import { Component, OnInit  } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { Buscador } from '../shared/components/buscador/buscador';
import { RouterLink } from '@angular/router';
import { JuegosService, Juego } from '../services/juegos';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-explorar',
  standalone: true,
  imports: [Nav, Footer, Buscador, CommonModule, RouterLink, FormsModule],
  templateUrl: './explorar.html',
  styleUrl: './explorar.css'
})
export class Explorar implements OnInit {
  juegos: Juego[] = [];
  juegosFiltrados: Juego[] = [];

  constructor(private juegosService: JuegosService) {
    
  }
  // 👇 filtros para ngModel
  filtroMin: number | null = null;
  filtroMax: number | null = null;

  ngOnInit() {
    this.juegosService.getJuegos().subscribe(data => {
      this.juegos = data;
      this.juegosFiltrados = [...this.juegos]; // mostrar todos al inicio
    });
  }


  aplicarFiltros() {
  this.juegosFiltrados = this.juegos.filter(j => {
    const precio= j.precio ?? 0;

    // 👈 si es undefined, lo tratamos como 0
    const cumpleMin = this.filtroMin !== null ?  precio>= this.filtroMin : true;
    const cumpleMax = this.filtroMax !== null ?  precio<= this.filtroMax : true;
    return cumpleMin && cumpleMax;
  });
}

  resetearFiltros() {
  this.filtroMin = null;
  this.filtroMax = null;
  this.juegosFiltrados = [...this.juegos]; // vuelve al original
}

}
