// src/app/services/juegos.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Juego {
  id: number;
  titulo: string;
  precio?: number;
  img: string;
  descripcion: string;
  descuento?: number;
  original?: number;
}

@Injectable({
  providedIn: 'root'
})
  
export class JuegosService {
  // Mock de juegos (luego puedes cambiar a API con HttpClient)
  private juegos: Juego[] = [
    {
      id: 1, titulo: 'FIFO 30', precio: 400000, img: 'assets/images/MMD_100146_14e44a7f441b415b89a274bc1a248d26_futbol_y_asi_sera_la_portada_del_fifa_30.jpg', descripcion: 'Juego de Golf'
    },
    {
      id: 2, titulo: 'Minecraft 2', precio: 200000, img: 'assets/images/minecraft-2-game-rant.avif', descripcion: `Juego sobre la guerra mundial`,
    },
    {
      id: 3, titulo: 'GTA 12', precio: 200000, img: 'assets/images/71uizbdZ5dL.jpg', descripcion:
      `Cuando un joven estafador callejero, un ladrón de bancos retirado y un psicópata aterrador
        se ven involucrados con lo peor y más desquiciado del mundo criminal, del gobierno de los
        EE. UU. y de la industria del espectáculo, tendrán que llevar a cabo una serie de peligrosos
        golpes para sobrevivir en una ciudad implacable en la que no pueden confiar en nadie. Y
        mucho menos los unos en los otros.`},
    {
      id: 4, titulo: 'Resident Good 2', precio: 82000, img: 'assets/images/resident-evil-2-remake-20191141048287_1.jpg', descripcion: `Juego de residencia buena`
    },
    {
      id: 5, titulo: 'Silecio Hill 2', precio: 210000, img: 'assets/images/silent-hill-2-remake-202410813414824_13.jpg', descripcion: `Juego de silencio`
    },
    {
      id: 6, titulo: 'Happy May Cry 3', precio: 67000, img: 'assets/images/Devil_May_Cry_3_boxshot.jpg', descripcion: `Juego de demonios`
    },
    {
      id: 7, titulo: 'God Of War Ragnarok', precio: 80000, img: 'assets/images/GodOfWar.jpg', descripcion: `Juego sobre politica`,
    },
    {
      id: 8, titulo: 'Bully 2', precio: 150000, img: 'assets/images/bully2.jpg', descripcion: `Juego de matones` }, 

      {id: 9, 
      titulo: 'Terraria',  
      original: 120.000,
      img: 'assets/images/terrariaC.jpg', 
      descripcion: `Terraria es un juego de aventura y exploración con construcción y combate en un mundo abierto.`, 
      descuento: 85.000 
    },
  
    {
      id: 10, 
      titulo: 'Call of duty', 
      original:120.000,
      img: 'assets/images/call-of-duty-black-ops-6-C.jpg', 
      descripcion: `Call of Duty Black Ops 6 trae acción intensa, nuevos modos multijugador y una campaña épica.`,
      descuento:85.000
    },

    {
      id: 11, 
      titulo: 'The last of us', 
      original: 120.000,
      img: 'assets/images/the_last_of_us_2-C.jpg', 
      descripcion: `The Last of Us cuenta una historia emocional en un mundo postapocalíptico con supervivencia y acción.`,
      descuento: 85.000
    },
        


  ];

  getJuegos(): Observable<any[]> {
    return of(this.juegos);
  }
  getJuegoById(id: number): Observable<Juego | undefined> {
    return of(this.juegos.find(j => j.id === id));
  }
}


