import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { HomeComponent } from './components/home/home.component';
import { APPROUTING } from './app.routes';
import { SelectsComponent } from './components/selects/selects.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { Tabla2Component } from './components/tabla2/tabla2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    NavbarComponent,
    BuscadorComponent,
    TablaComponent,
    HomeComponent,
    SelectsComponent,
    CategoriasComponent,
    Tabla2Component
  ],
  imports: [
    BrowserModule,
    APPROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
