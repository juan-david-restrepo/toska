import { Component, OnInit, OnDestroy, ChangeDetectorRef, signal } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { RouterLink, RouterModule } from '@angular/router';
import { Buscador } from '../shared/components/buscador/buscador';
import { JuegosService, Juego } from '../services/juegos';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-home',
  imports: [Nav, Footer, Buscador, RouterModule, RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit, OnDestroy {
  
  carouselItems = [
    {
      id: 12, /* el id para poder identificarlo */
      image: 'assets/images/redDead.jpg',
      img:'assets/images/red-dead-redemption-2C.webp',
      titulo: 'Red Dead Redemption 2',
      descripcion: 'Vive la aventura en el Salvaje Oeste.',
      precio: '120.000',
    },
    {
      id: 13,
      image: 'assets/images/fornite2.jpg',
      img:'assets/images/forniteC-pge.gif',
      titulo: 'Fortnite',
      descripcion: 'El battle royale más popular.',
      precio: 'Gratis',
    },
    {
      id: 14,
      image: 'assets/images/detroit2.jpg',
      img:'assets/images/detroit-becomeC.jpg',
      titulo: 'Detroit Become Human',
      descripcion: 'Una historia futurista llena de decisiones.',
      precio: '140.000',
    },
    {
      id: 15,
      image:'assets/images/theForest.jpg',
      img:'assets/images/the-forest-ps4.png',
      titulo: 'The Forest',
      descripcion: 'Sobrevive en una isla llena de misterios.',
      precio: '90.000',
    }
  ];

  currentIndex = 0;
  intervalId: any = null;
  juegos: Juego[] = [];

  constructor(private cdr: ChangeDetectorRef, private juegosService: JuegosService) {}

  ngOnInit(): void {
    this.startCarousel();

    this.juegosService.getJuegos().subscribe(data => {
      this.juegos = data;
    });
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }

  startCarousel(): void {
    // evita crear múltiples intervalos
    this.stopCarousel();
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
      this.cdr.detectChanges();
    }, 5000);
  }

  stopCarousel(): void {
    if (this.intervalId != null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private resetCarouselInterval(): void {
    // reinicia el autoplay después de una acción manual
    this.stopCarousel();
    this.startCarousel();
  }

  prevSlide(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
    this.cdr.detectChanges();
    this.resetCarouselInterval();
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
    this.cdr.detectChanges();
    this.resetCarouselInterval();
  }

  protected readonly promiciones = signal('Promociones');
  protected readonly masJugados = signal('Mas jugados');
}
