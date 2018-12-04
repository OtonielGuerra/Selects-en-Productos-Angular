import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: []
})
export class TablaComponent implements OnInit {
  @Input() productos: any[] = [];
  @Output() emitirDescripcion: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  eliminar(elemento: string) {
    this.emitirDescripcion.emit(elemento);
  }
}
