import { Component } from '@angular/core';
import { Producto } from '../maquillaje-rostro.model';
import { AgregarProductosService } from '../agregar-productos.service';

@Component({
  selector: 'app-cuidado-capilar',
  templateUrl: './cuidado-capilar.component.html',
  styleUrls: ['./cuidado-capilar.component.css']
})
export class CuidadoCapilarComponent {

  contador: number = 0;

  constructor(private agregarProductosService: AgregarProductosService){}

  agregarDatos(add: boolean) {
    if(add){
      this.contador ++;
    }
    else {
      this.contador --;
    }

    this.agregarProductosService.contador.emit(this.contador);
  }


  productos: Producto[] = [
    new Producto("Shampoo Café","35232","OGX",68500),
    new Producto("Acondicionador Café","54363","OGX",68500),
    new Producto("Acondicionador Coco","32311","OGX",68500),
    new Producto("Shampoo Coco","45643","OGX",68500),
    new Producto("Aceite Coco","22143","OGX",77500),
    new Producto("Mascarilla Shea Butter","12312","Maui",73500),
    new Producto("Acondicionador Color Motion","31231","Wella Professional",100000)
  ]

}
