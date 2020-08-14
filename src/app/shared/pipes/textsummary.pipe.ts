import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {
  transform(value: any,limit?:number): any {
    if(value&&String(value).length>(limit?limit:10)){
        return String(value).substr(0,limit?limit:10)+'...';
    }else{
        return value;
    }
  }
}
