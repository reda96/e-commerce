import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayInlcudes'
})
export class ArrayInlcudesPipe implements PipeTransform {

  transform(items: any[], args: any): any {
    
    return !!items.find((item)=>args.id==item.id || args.id==item.product);
}

}
