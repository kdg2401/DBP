import { Injectable } from '@angular/core';
import {Cliente, Grupo} from './cliente.model'

@Injectable()
export class ClientesService{
  private clientes: Cliente[];
  private grupos: Grupo[];

  constructor(){
    this.grupos = [
      {
        id: 0.05,
        nombre: '5%'
      },
      {
        id: 0.10,
        nombre: '10%'
      },
      {
        id: 0.15,
        nombre: '15%'
      },
      {
        id: 0.25,
        nombre: '25%'
      },
    ];
    this.clientes = []
  }
  getGrupos(){
    return this.grupos;
  }
  getClientes(){
    return this.clientes;
  }
  agregarCliente(cliente: Cliente){
    this.clientes.push(cliente);
  }
  nuevoCliente(): Cliente{
    return{
      id: this.clientes.length,
      nombre: '',
      cif: '',
      direccion: 1,
      grupo: 0.05
    };
  }
}