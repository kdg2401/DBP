import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClientesService } from './clientes.service';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { FormsModule } from '@angular/forms';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';

const routes: Routes = [
  { path: 'alta-cliente', component: AltaClienteComponent, pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AltaClienteComponent,
    ListadoClientesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    [RouterModule.forChild(routes)]
  ],
  providers:[
    ClientesService
  ],
  exports:[
    AltaClienteComponent,
    ListadoClientesComponent,
    [RouterModule]
  ]
})
export class ClientesModule { }

