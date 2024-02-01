import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  obsMsg;

  constructor(private designUtil :DesignUtilityService) { }

  ngOnInit() {

    //OF

    const observable1 = of('Rajat','Singh','Working');

    observable1.subscribe(res=>{
      console.log(res)
      this.designUtil.print(res,'elemContainer')
    })

    const observable2 = of({
      a:'Rajat',
      b:'Singh',
      c:'Working'
    });
    observable2.subscribe(res=>{
      this.obsMsg = res;
      console.log('Obs Message = ',res)
    })

    //FROM  

    const observable3 = from([ 'Singh' , ' Is ' , ' The ' , 'King']);

    observable3.subscribe(res =>{
      console.log(res)
      this.designUtil.print(res,'elemContainer3')
    })

    //From - Promise
    const promise = new Promise(resolve=>{
      setTimeout(()=>{
        resolve('Promise Resolved')
      },5000)
    })
    
    const observable4 = from(promise);
    observable4.subscribe((res:any)=>{
      console.log('from Promise =>',res)
      this.designUtil.print(res,'elemContainer4')
    })


    //From - String

    const observable5 = from('Heres the string');
    observable5.subscribe((res:any)=>{
      console.log('from Promise =>',res)
      this.designUtil.print(res,'elemContainer5')
    })
  }

}
