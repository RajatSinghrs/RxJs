import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit , OnDestroy{
  status;
  status2;
  names:String;
  nameStatus;

  subsExp2:Subscription;

  constructor(private designUtil: DesignUtilityService) { }

  ngOnInit(): void {

    //EX-01
    const custObser = Observable.create(obs => {
      setTimeout(() => {
        obs.next('Angular');
      }, 1000);
      setTimeout(() => {
        obs.next('Typescript');
      }, 2000);
      setTimeout(() => {
        obs.next('HTML');
        // obs.error(new Error('Limit Exceeded'))
      }, 3000)
      setTimeout(() => {
        obs.next('Javascript');
      }, 4000)
      setTimeout(() => {
        obs.next('JQuery');
        obs.complete();
      }, 5000)
    })

    //subscribe(data ,  error , completion)
    custObser.subscribe(res => {
      // console.log(res)
      this.designUtil.print(res, 'elemContainer')
    },   (err) => {
       // console.log(err)
        this.status = 'error';
      },   ( ) => {
        this.status = 'completed';
      })


      //EXP -02 (Custom Interval)

      const arr2 = ['Angular', 'Javascript' , 'Html', 'CSS' , 'TypeScript']
      const custObser2 = Observable.create(obs => {
        let count =0 ;
        setInterval(() => {
          obs.next(arr2[count]);
          if(count>=3){
            obs.error('Error Emit')
          }
          if(count>=5){
            obs.complete()
          }
          count++
        }, 1000);
      })
        this.subsExp2 = custObser2.subscribe(res=>{
          // console.log(res)
          this.designUtil.print(res, 'elemContainer2')
        },
        (err)=>{
          this.status2 = 'error';
        },
        ()=>{
          this.status2 = 'completed';
        } )


      //EXP -03 (Random Names)
      const arr3 = ['Singh' , ' Rajat' , ' Ansh ' , 'Adit' , 'Vijay' , 'Brim']
      const custObser3 = Observable.create(obs =>{
      let count =0 ;
      setInterval(() => {
        obs.next(arr3[count]);

        if(count>=3){
          // obs.error('Error Emit')
        }
        if(count>=5){
          obs.complete()
        }
        count++
      }, 1000);
  })

  custObser3.subscribe(res=>{
    console.log(res)
    this.names =res;
  } ,
  (err)=>{
    this.nameStatus ='error';
  },
  ()=>{
    this.nameStatus ='completed';
  } )

  }
  ngOnDestroy(): void {
    this.subsExp2.unsubscribe();
  }

}
