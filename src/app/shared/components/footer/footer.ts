import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  protected readonly direccion = signal("@Toska.com");
  protected readonly imagen = signal("assets/images/X_logo.png")
}
