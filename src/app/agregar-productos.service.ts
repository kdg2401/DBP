import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgregarProductosService {

  contador: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }
  
}
