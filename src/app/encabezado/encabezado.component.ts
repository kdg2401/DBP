import { Component, Input } from '@angular/core';
import { AgregarProductosService } from '../agregar-productos.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {

  valor_envio_gratis = 60000;

  anuncio = 'envío gratis a nivel nacional por compras mayores a'

  constructor(private agregarProductosService: AgregarProductosService){}

  @Input() NCompras:Number;

  contador:any = 0

  busqueda:String = "";

    ngOnInit(){
      this.agregarProductosService.contador.subscribe(
        contador =>{
          this.contador = contador;
        }
      )
    }
}
