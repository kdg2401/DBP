import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'traduccion'
})
export class TraduccionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args != null){
        if (args=='spanish')
        switch(value){
            case 1: return 'BeautyPink es una empresa dedicada a vender productos de maquillaje y cuidado personal con más de 5 años en el mercado.';
        }
        if (args=='ingles')
        switch(value){
            case 1: return 'BeautyPink is a company dedicated to selling makeup and personal care products with more than 5 years in the market.';
        }
        return null;
            
    }
  }

}
