import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  data: any[] = [
    {
     'descripcion' : 'Pants',
     'precio' : 150.00,
     'imagen' : 'Pants.jpg'
    },
    {
      'descripcion' : 'Camisa',
      'precio' : 350.00,
      'imagen' : 'camisa.jpg'
     },
     {
      'descripcion' : 'Pantalones',
      'precio' : 100.00,
      'imagen' : 'Pan.jpg'
     },
     {
      'descripcion' : 'Faldas',
      'precio' : 300.00,
      'imagen' : 'Falda.jpg'
     },
     {
      'descripcion' : 'Poleras',
      'precio' : 500.00,
      'imagen' : 'Polera.png'
     },
     {
      'descripcion' : 'Zapatos',
      'precio' : 200.00,
      'imagen' : 'Zapatos.jpg'
     },
     {
      'descripcion' : 'Sandalias',
      'precio' : 100.00,
      'imagen' : 'sandalias.jpg'
     },
     {
      'descripcion' : 'Sueteres',
      'precio' : 75.00,
      'imagen' : 'Sueter.jpg'
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
