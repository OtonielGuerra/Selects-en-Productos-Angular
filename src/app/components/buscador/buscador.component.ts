import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from './../../services/productos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {
  termino: string;
  data: any[] = [];
  constructor(private _activatedroute: ActivatedRoute, private _productoService: ProductosService) {
    this._activatedroute.params.subscribe(params => {
      this.termino = params['termino'];
      this.buscar();
    });
  }
  ngOnInit() {
  }

  buscar() {
    this.data = this._productoService.buscar(this.termino);
  }

  eliminar(elemento: string) {
    console.log(elemento);
  }

  save(elemento: string) {
    console.log(elemento);
  }
}
