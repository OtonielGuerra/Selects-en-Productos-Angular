import { Component, OnInit } from '@angular/core';
import { ProductosService } from './../../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: []
})
export class ProductosComponent implements OnInit {
  data: any[] = [];
  constructor(private _productoService: ProductosService) {
    this.data = this._productoService.productos();
  }

  ngOnInit() {
  }

  eliminar(parametro: string) {
    console.log(parametro);
  }

  save(elemento: string) {
    console.log(elemento);
  }

}
