import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla2',
  templateUrl: './tabla2.component.html',
  styles: []
})
export class Tabla2Component implements OnInit {
  @Input() categorias: any[] = [];
  @Output() emitirDescripcion: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  eliminar(elemento: string) {
    this.emitirDescripcion.emit(elemento);
  }
}
