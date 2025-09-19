import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { JuegosService, Juego } from '../services/juegos';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [Nav, Footer, CurrencyPipe, RouterModule, CommonModule],
  templateUrl: './detalles.html',
  styleUrls: ['./detalles.css']
})
export class Detalles implements OnInit {
  juego?: Juego;

  constructor(
    private route: ActivatedRoute,
    private juegosService: JuegosService
  ) {}

  ngOnInit() {
    const nav = history.state as { juego?: Juego };
    if (nav.juego) {
      this.juego = nav.juego;
      return;
    }

    //  si el usuario entra directo con /detalles/id
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.juegosService.getJuegoById(id).subscribe(j => this.juego = j);
    }
  }

  

  function  carrio(params:type) {
    
  }

}

