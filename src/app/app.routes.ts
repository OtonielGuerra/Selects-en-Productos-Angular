import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent} from './components/buscador/buscador.component';
import { SelectsComponent } from './components/selects/selects.component';
import { CategoriasComponent } from './components/categorias/categorias.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'productos', component: ProductosComponent},
    { path: 'buscador/:termino', component: BuscadorComponent},
    { path: 'select', component: SelectsComponent},
    { path: 'categorias', component: CategoriasComponent },
    { path: '**',  pathMatch: 'full', redirectTo: 'home' }
];


export const APPROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
