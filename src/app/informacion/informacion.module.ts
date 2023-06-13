import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { TraduccionPipe } from './traduccion.pipe';



@NgModule({
  declarations: [
    AcercaDeComponent,
    TraduccionPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AcercaDeComponent
  ]
})
export class InformacionModule { }
