import { Component, signal } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';

@Component({
  selector: 'app-registro',
  imports: [Nav, Footer],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
  protected readonly contrasena = signal("Contraseña");
  protected readonly registrarme = signal("Registrarme")
}
