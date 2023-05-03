import { ClientesService } from '../clientes.service';
import { Producto, Grupo} from './../cliente.model'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit{
  producto: Producto;
  grupos: Grupo[];

  constructor(private clientesService: ClientesService){  }
  ngOnInit(){
    this.producto = this.clientesService.nuevoCliente();
    this.grupos = this.clientesService.getGrupos();
  }
  nuevoCliente(): void{
    this.clientesService.agregarCliente(this.producto);
    this.producto = this.clientesService.nuevoCliente();
  }
}
