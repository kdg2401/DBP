import { Injectable } from '@angular/core';
import {Producto, Grupo} from './cliente.model'

@Injectable()
export class ClientesService{
  private clientes: Producto[];
  private grupos: Grupo[];

  constructor(){
    this.grupos = [
      {
        id: 0,
        nombre: 'Sin definir'
      },
      {
        id: 1,
        nombre: 'Rostro'
      },
      {
        id: 2,
        nombre: 'Ojos'
      }
    ];
    this.clientes = []
  }
  getGrupos(){
    return this.grupos;
  }
  getClientes(){
    return this.clientes;
  }
  agregarCliente(cliente: Producto){
    this.clientes.push(cliente);
  }
  nuevoCliente(): Producto{
    return{
      id: this.clientes.length,
      nombre: '',
      marca: '',
      codigo: '',
      categoria: 0
    };
  }
}