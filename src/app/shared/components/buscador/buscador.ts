  import { Component, computed, signal } from '@angular/core';
  import { JuegosService, Juego } from '../../../services/juegos';
  import { CurrencyPipe, CommonModule } from '@angular/common';
  import { RouterLink, RouterModule } from '@angular/router';

  @Component({
    selector: 'app-buscador',
    imports: [CurrencyPipe, CommonModule, RouterModule, RouterLink],
    templateUrl: './buscador.html',
    styleUrls: ['./buscador.css']
  })
  export class Buscador {
    protected readonly MasJugados = signal("Mas jugados");
    protected readonly gratis = signal("Gratis")

    protected readonly juegos = signal<Juego[]>([]);

    protected readonly filtro = signal<string>('');

    protected readonly juegosFiltrados = computed(() =>{  // computed() crea un valor calculado automáticamente cuando cambia algo
      return this.juegos().filter(juego =>
        juego.titulo.toLowerCase().includes(this.filtro().toLowerCase())
      )
    });

    constructor(private juegosService: JuegosService){
      this.juegosService.getJuegos().subscribe((data) =>{
        this.juegos.set(data);
      })
    }

    onBuscar(event: Event){ // (input)="onBuscar($event)" escucha la escritura en el input
      const valor = (event.target as HTMLInputElement).value;
      this.filtro.set(valor);
    }



  }
