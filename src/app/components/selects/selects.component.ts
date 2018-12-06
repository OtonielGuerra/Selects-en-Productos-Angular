import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selects',
  templateUrl: './selects.component.html',
  styles: []
})
export class SelectsComponent implements OnInit {
  @Input() productos: any[] = [];
  @Input() categorias: any[] = [];
  @Output() emitirDescripcion: EventEmitter<string> = new EventEmitter();

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  save(print: string) {
    this.emitirDescripcion.emit(print);
  }

  buscar(termino: string) {
    this._router.navigate(['buscador', termino]);
  }

  eliminar(elemento: string) {
    this.emitirDescripcion.emit(elemento);
  }

}
