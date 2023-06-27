import {  Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {
  tempPhone:String=""
  startPhone:String=""

  transform(phone: string):string {
    this.tempPhone=phone;
    if(phone.length==9){
             this.startPhone=phone.substring(0,2);
       return this.startPhone+'-'+phone.substring(2,phone.length);
    }
    else{
             this.startPhone=phone.substring(0,3);
      return this.startPhone+'-'+phone.substring(3,phone.length);
    }

  }

}
