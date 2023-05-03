import { Component } from '@angular/core';
import { Producto } from './maquillaje-rostro.model';

@Component({
  selector: 'app-maquillaje-rostro',
  templateUrl: './maquillaje-rostro.component.html',
  styleUrls: ['./maquillaje-rostro.component.css']
})
export class MaquillajeRostroComponent {

  productos: Producto[] = [
    new Producto("Pestañina","97456","Max Factor",25900),
    new Producto("Labial","78456","Vitú",11900),
    new Producto("Polvo Compacto","54621","Max Factor",52300),
    new Producto("Rubor","85442","Almay",69900),
    new Producto("Paleta Sombras","23694","Essence",24200),
    new Producto("Paleta Iluminadores","44511","Essence",25900),
  ]

}
