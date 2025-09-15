import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-buscador',
  imports: [],
  templateUrl: './buscador.html',
  styleUrl: './buscador.css'
})
export class Buscador {
  protected readonly MasJugados = signal("Mas jugados");
  protected readonly gratis = signal("Gratis")
} 
