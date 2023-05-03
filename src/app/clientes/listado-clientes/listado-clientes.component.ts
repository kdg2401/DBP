import { Producto, Grupo} from './../cliente.model'
import { ClientesService } from '../clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit{
  productoss: Producto[];
  constructor(private clientesService: ClientesService){}
  ngOnInit(){
    this.productoss = this.clientesService.getClientes();
  }
  
}
