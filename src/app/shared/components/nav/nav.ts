import { Component, signal, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './nav.html',
  styleUrls: ['./nav.css']
})
export class Nav {
  protected readonly juegos = signal("Inicio");
  protected readonly explorar = signal("Explorar");
  protected readonly comunidad = signal("Comunidad");
  protected readonly ayuda = signal("Ayuda");

  // ➕ Carrito
  carritoAbierto = false;
  cantidadItems = 0;
  items: { nombre: string; precio: number }[] = [
    { nombre: 'Juego 1', precio: 59.99 },
    { nombre: 'Juego 2', precio: 39.99 }
  ];

  toggleCarrito() {
    this.carritoAbierto = !this.carritoAbierto;
  }

  // 🔹 Cerrar carrito al hacer clic fuera
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const cartPanel = document.querySelector('.cart-panel');
    const cartButton = document.querySelector('.cart-button');

    if (
      this.carritoAbierto &&
      cartPanel &&
      !cartPanel.contains(target) &&
      cartButton &&
      !cartButton.contains(target)
    ) {
      this.carritoAbierto = false;
    }
  }
}
