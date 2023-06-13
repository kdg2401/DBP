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
import { MaquillajeRostroComponent } from './maquillaje-rostro/maquillaje-rostro.component';
import { CuidadoCapilarComponent } from './cuidado-capilar/cuidado-capilar.component'
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';


import { InformacionModule } from './informacion/informacion.module';
import { AcercaDeComponent } from './informacion/acerca-de/acerca-de.component';


import { MatInputModule } from '@angular/material/input'
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';


const routes: Routes = [
  { path: 'cuerpo', component: CuerpoComponent },
  { path: 'form-registro', component: FormRegistroComponent },
  { path: 'inicio', component: InicioComponent},
  { path: 'maquillaje-rostro', component: MaquillajeRostroComponent},
  { path: 'cuidado-capilar', component: CuidadoCapilarComponent},
  { path: 'pagina-no-existe', component: PaginaNoExisteComponent},
  { path: 'pagina-no-existe', component: PaginaNoExisteComponent},
  { path: 'acerca-de', component: AcercaDeComponent},
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
        PaginaNoExisteComponent,
        MaquillajeRostroComponent,
        CuidadoCapilarComponent,
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
        ClientesModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        InformacionModule,
        MatCardModule,
        MatDialogModule,
        MatTableModule,    
        MatInputModule
    ],
    exports: [],
    schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
