// src/app/services/juegos.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Juego {
  id: number;
  titulo: string;
  precio?:any;
  img: string;
  descripcion: string;
  descuento?: number;
  original?: number;
  image?: string;
}

@Injectable({
  providedIn: 'root'
})
  
export class JuegosService {
  // Mock de juegos ()
  private juegos: Juego[] = [
    {
      id: 1, 
      titulo: 'FIFO 30', 
      precio: 400000, 
      img: 'https://www.sandiegouniontribune.com/wp-content/uploads/migration/2017/06/05/00000169-69d2-da6f-abeb-7ffb20eb0000.jpg?w=535', 
      descripcion: 'Juego de Golf'
    },
    {
      id: 2,
      titulo: 'Minecraft 2', 
      precio: 200000, 
      img: 'https://uvejuegos.com/img/caratulas/51662/portada16917.jpeg', 
      descripcion: `Juego sobre la guerra mundial`,
    },
    {
      id: 3, 
      titulo: 'GTA 12', 
      precio: 200000, 
      img: 'https://www.gamereactor.es/media/53/grandtheftauto_925314b.png', 
      descripcion:
      `Cuando un joven estafador callejero, un ladrón de bancos retirado y un psicópata aterrador
        se ven involucrados con lo peor y más desquiciado del mundo criminal, del gobierno de los
        EE. UU. y de la industria del espectáculo, tendrán que llevar a cabo una serie de peligrosos
        golpes para sobrevivir en una ciudad implacable en la que no pueden confiar en nadie. Y
        mucho menos los unos en los otros.`},
    {
      id: 4, 
      titulo: 'Resident Good 2', 
      precio: 82000, 
      img: 'https://i.3djuegos.com/juegos/12333/resident_evil_2__2015_/fotos/ficha/resident_evil_2__2015_-4765189.jpg', 
      descripcion: `Juego de residencia buena`
    },
    {
      id: 5, 
      titulo: 'Silecio Hill 2',
      precio: 210000, 
      img: 'https://i.3djuegos.com/juegos/18812/silent_hill_2_remake/fotos/ficha/silent_hill_2_remake-5761340.jpg', 
      descripcion: `Juego de silencio`
    },

    {
      id: 6, 
      titulo: 'Happy May Cry 3', 
      precio: 67000, 
      img: 'https://i.pinimg.com/736x/3e/16/9e/3e169ebe51cdeac04e72968bde535aae.jpg', 
      descripcion: `Juego de demonios`
    },
    {
      id: 7, 
      titulo: 'God Of War Ragnarok', 
      precio: 80000, 
      img: 'https://juegosdigitaleschile.com/files/images/productos/1667950548-god-of-war-ragnarok-ingles-ps4-pre-orden-0.jpg', 
      descripcion: `Juego sobre politica`,
    },
    {
      id: 8, 
      titulo: 'Bully 2', 
      precio: 150000, 
      img: 'https://i.pinimg.com/474x/5f/0e/21/5f0e2159364261ad03de1ef99f133d5f.jpg', 
      descripcion: `Juego de matones` }, 

      {id: 9, 
      titulo: 'Terraria',  
      original: 120000,
      img: 'https://i.redd.it/terraria-ps4-cover-difference-v0-rdc1c5u5ga2e1.jpg?width=801&format=pjpg&auto=webp&s=262bc2a2c104179ac24241a28e33b2c1833dba7a', 
      image: 'https://osdanovahub.weebly.com/uploads/4/9/8/4/49844611/307106_orig.jpg',
      descripcion: `Terraria es un juego de aventura y exploración con construcción y combate en un mundo abierto.`, 
      descuento: 85000,
    },
  
    {
      id: 10, 
      titulo: 'Call of duty', 
      original:120000,
      img: 'https://juegosdigitalescolombia.com/files/images/thumbs/productos_300x400_1718046332-call-of-duty-black-ops-6-xbox-one-pre-orden-0.webp', 
      image: 'https://i.redd.it/two-banners-for-black-ops-6-including-the-partially-v0-3j4pddvln62d1.jpg?width=1500&format=pjpg&auto=webp&s=50c1d27138e1bf041fcfccc646a31491281eb68f',
      descripcion: `Call of Duty Black Ops 6 trae acción intensa, nuevos modos multijugador y una campaña épica.`,
      descuento:85000,
    },

    {
      id: 11, 
      titulo: 'The last of us', 
      original: 120000,
      img: 'https://i.3djuegos.com/juegos/14236/the_last_of_us_2/fotos/ficha/the_last_of_us_2-4977781.jpg', 
      image: 'https://i.redd.it/vilf0pneoj4c1.jpg',
      descripcion: `The Last of Us cuenta una historia emocional en un mundo postapocalíptico con supervivencia y acción.`,
      descuento: 85000,
    },

        {
      id: 12, /* el id para poder identificarlo */
      image: 'https://i.blogs.es/169695/red0/1366_2000.jpg',
      img:'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/05/red-dead-redemption-2_17.jpg?tf=3840x',
      titulo: 'Red Dead Redemption 2',
      descripcion: 'Vive la aventura en el Salvaje Oeste.',
      precio: 120000,
    },
    {
      id: 13,
      image: 'https://cdn1.epicgames.com/offer/fn/FNBR_37-00_C6S4_EGS_Launcher_KeyArt_FNLogo_Carousel_PDP_2560x1440_logo_2560x1440-04348f5d3d52391f572e8c1050ddc737',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYNIEqftDXtPbOU-4shNeKJgQ052cmEQWx4g&s',
      titulo: 'Fortnite',
      descripcion: 'El battle royale más popular.',
      precio: "gratis",
    },
    {
      id: 14,
      image: 'assets/images/detroit2.jpg',
      img:'https://i.blogs.es/juegos/12503/detroit/fotos/noticias/detroit-4005907.jpg',
      titulo: 'Detroit Become Human',
      descripcion: 'Una historia futurista llena de decisiones.',
      precio: 140000,
    },
    {
      id: 15,
      image:'https://media.vandal.net/m/4-2018/201841318231_1.jpg',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2wcytnZ6IRRFUAJXUOBoSNBFywOVTisRAMA&s',
      titulo: 'The Forest',
      descripcion: 'Sobrevive en una isla llena de misterios.',
      precio: 90000,
    },

        {
      id: 16,
      img:'https://i.3djuegos.com/juegos/11043/the_master_chief_collection/fotos/ficha/the_master_chief_collection-2548530.jpg',
      titulo: 'Halo',
      descripcion: 'Salva el universo de los aliens malvados.',
      precio: 70000,
    },

        {
      id: 17,
      img:'https://pbs.twimg.com/media/Fd1nzR4X0AAnsB6.jpg:large',
      titulo: 'Zelda',
      descripcion: 'Sobrevive en una isla llena de misterios.',
      precio: 90000,
    }
        


  ];

  getJuegos(): Observable<any[]> {
    return of(this.juegos);
  }
  getJuegoById(id: number): Observable<Juego | undefined> {
    return of(this.juegos.find(j => j.id === id));
  }
}


