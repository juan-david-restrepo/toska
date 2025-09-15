import { Component, OnInit  } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { Buscador } from '../shared/components/buscador/buscador';
import { RouterLink } from '@angular/router';
import { JuegosService, Juego } from '../services/juegos';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-explorar',
  standalone: true,
  imports: [Nav, Footer, Buscador, CommonModule, RouterLink],
  templateUrl: './explorar.html',
  styleUrl: './explorar.css'
})
export class Explorar implements OnInit {
  juegos: Juego[] = [];

  constructor(private juegosService: JuegosService) {
    
  }

  ngOnInit() {
    this.juegosService.getJuegos().subscribe(data => {
      this.juegos = data;
    });
  }
}
