import { Component, OnInit } from '@angular/core';
import { CategoriasService } from './../../services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styles: []
})
export class CategoriasComponent implements OnInit {
  data: any[] = [];
  constructor(private _categoriaService: CategoriasService) {
    this.data = this._categoriaService.Categorias();
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
