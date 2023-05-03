import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {

  @Input() NCompras:Number;

  numeroCompras:any = 0

  busqueda:String = "";

    agregarArticuloCarro(){
      this.numeroCompras = this.numeroCompras + 1;
    }
}
