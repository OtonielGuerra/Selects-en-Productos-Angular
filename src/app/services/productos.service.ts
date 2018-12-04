import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  data: any[] = [
    {
     'descripcion' : 'Pants',
     'precio' : 150.00,
     'imagen' : 'noimage.png'
    },
    {
      'descripcion' : 'Camisa',
      'precio' : 350.00,
      'imagen' : 'noimage.png'
     },
     {
      'descripcion' : 'Pantalones',
      'precio' : 100.00,
      'imagen' : 'noimage.png'
     },
     {
      'descripcion' : 'Faldas',
      'precio' : 250.00,
      'imagen' : 'noimage.png'
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
  productos() {
    return this.data;
  }
}
