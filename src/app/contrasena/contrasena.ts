import { Component, signal } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';

@Component({
  selector: 'app-contrasena',
  imports: [Nav, Footer],
  templateUrl: './contrasena.html',
  styleUrl: './contrasena.css'
})
export class Contrasena {
  protected readonly recuperar = signal("Recuperar contraseña");
  protected readonly email = signal("Email")
}
