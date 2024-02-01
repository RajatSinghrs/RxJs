import { Component, OnInit } from '@angular/core';
import { Button } from 'protractor';
@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {
  constructor() { }
  laptopAvailable(){
    return false;
  }
  carAvailable(){
    return true;
  }
  promiseVal: unknown;
  lappy ={
    brand: 'apple',
    body : 'metal',
    color:'Grey'
  }
  cars={
    brand: 'tesla',
    body : 'plastic',
    color:'White'
  }
  notAvailable={
    brand: 'notAvailavle',
    status: 'failed'
  }
  ngOnInit():void {
    let buyThings = new Promise((resolve,reject)=>{
      //resolve('Promsie resolved');
      //reject('Promise rejected);
      if(this.laptopAvailable()){
        return setTimeout(()=>{
          // resolve('Laptop is purchased')
          resolve(this.lappy)
        },2000)
      }else if(this.carAvailable()){
        return setTimeout(()=>{
          // resolve('Car is purchased')
          resolve(this.cars)
        },2000)
      }else{
        // reject('Nothing is available')
        reject(this.notAvailable);
      }
    });
    buyThings.then(res=>{
      console.log('successfull(then code) = ', res)
      this.promiseVal=res;
    }).catch(res=>{
      console.log('rejected(catch code) = ', res)
      this.promiseVal=res;
    })
  }
}
