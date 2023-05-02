import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PieComponent } from './pie/pie.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { PaginaNoExisteComponent } from './pagina-no-existe/pagina-no-existe.component';
import { ClientesModule } from "./clientes/clientes.module";

const routes: Routes = [
  { path: 'cuerpo', component: CuerpoComponent },
  { path: 'form-registro', component: FormRegistroComponent },
  { path: 'inicio', component: InicioComponent},
  { path: 'pagina-no-existe', component: PaginaNoExisteComponent},
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: '**', component: PaginaNoExisteComponent, pathMatch: 'full' }
];

@NgModule({
    declarations: [
        AppComponent,
        EncabezadoComponent,
        PieComponent,
        CuerpoComponent,
        FormRegistroComponent,
        InicioComponent,
        PaginaNoExisteComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule,
        ClientesModule
    ],
    schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
