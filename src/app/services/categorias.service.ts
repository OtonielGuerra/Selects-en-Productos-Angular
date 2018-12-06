import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  data: any[] = [
    {
      'descripcion' : 'Zapatos',
      'imagen' : 'Zapatos.jpg'
    },
    {
      'descripcion' : 'Ropa para adulto',
      'imagen' : 'RopaAdulto.jpg'
    },
    {
      'descripcion' : 'Ropa para mujer',
      'imagen' : 'RopaMujer.jpg'
    },
    {
      'descripcion' : 'Ropa para hombre',
      'imagen' : 'RopaHombre.jpg'
    },
    {
      'descripcion' : 'Ropa para niños',
      'imagen' : 'RopaNino.jpg'
    },
    {
      'descripcion' : 'Ropa para niñas',
      'imagen' : 'Ninas.jpg'
    },
    {
      'descripcion' : 'Vestidos',
      'imagen' : 'Vas.jpg'
    }
  ];
  constructor() { }

  buscar(termino: string) {
    let resultado: any[] = [];
    for (let i = 0; i < this.data.length; i++ ) {
      if (this.data[i].descripcion.toLowerCase().indexOf(termino.toLowerCase()) >= 0) {
        resultado.push(this.data[i]);
      }
    }
    return resultado;
  }

  Categorias() {
    return this.data;
  }
}
