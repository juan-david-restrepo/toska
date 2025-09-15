import { Component, signal } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [Nav, Footer, RouterModule],
  templateUrl: './login.html',
  styleUrl:  './login.css'
})
export class Login {
  protected readonly contrasena = signal("¿Olvidaste tu contraseña?");
  protected readonly iniciar = signal("Iniciar Sesion")
}



