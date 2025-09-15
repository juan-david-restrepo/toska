import { Component } from '@angular/core';
import { Nav } from "../shared/components/nav/nav";
import { Footer } from '../shared/components/footer/footer';
import { Buscador } from "../shared/components/buscador/buscador";

@Component({
  selector: 'app-comunidad',
  imports: [Nav, Footer, Buscador],
  templateUrl: './comunidad.html',
  styleUrl: './comunidad.css'
})
export class Comunidad {

}
