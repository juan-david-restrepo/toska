import { Component, OnInit, OnDestroy, ChangeDetectorRef, signal } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { RouterLink, RouterModule } from '@angular/router';
import { Buscador } from '../shared/components/buscador/buscador';
import { JuegosService, Juego } from '../services/juegos';
import { CommonModule, CurrencyPipe } from '@angular/common'; 



@Component({
  selector: 'app-home',
  imports: [Nav, Footer, Buscador, RouterModule, RouterLink, CommonModule, CurrencyPipe],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit, OnDestroy {
  
  carouselItems = [
    {
      id: 12, /* el id para poder identificarlo */
      image: 'https://i.blogs.es/169695/red0/1366_2000.jpg',
      img:'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/05/red-dead-redemption-2_17.jpg?tf=3840x',
      titulo: 'Red Dead Redemption 2',
      descripcion: 'Vive la aventura en el Salvaje Oeste.',
      precio: '120.000',
    },
    {
      id: 13,
      image: 'https://cdn1.epicgames.com/offer/fn/FNBR_37-00_C6S4_EGS_Launcher_KeyArt_FNLogo_Carousel_PDP_2560x1440_logo_2560x1440-04348f5d3d52391f572e8c1050ddc737',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYNIEqftDXtPbOU-4shNeKJgQ052cmEQWx4g&s',
      titulo: 'Fortnite',
      descripcion: 'El battle royale más popular.',
      precio: 'Gratis',
    },
    {
      id: 14,
      image: 'https://theboulevard252.org/wp-content/uploads/2019/12/detroit.jpg',
      img:'',
      titulo: 'Detroit Become Human',
      descripcion: 'Una historia futurista llena de decisiones.',
      precio: '140.000',
    },
    {
      id: 15,
      image:'https://media.vandal.net/m/4-2018/201841318231_1.jpg',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2wcytnZ6IRRFUAJXUOBoSNBFywOVTisRAMA&s',
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
