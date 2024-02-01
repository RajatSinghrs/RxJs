import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.scss']
})
export class DebouncetimeComponent implements OnInit, AfterViewInit{

  @ViewChild('myInput')  myInput: ElementRef;//We can get the value of text to be written in the form by template referral .
  //As we are taking the data from a dom Element(myInput) in the above line, which will be rendered after the DOM loads.-
  //-if we use Oninit it will start its execution before the DOM element loads,
  //- so instead of using OnInit we have to use afterViewInit life cycle hook
  reqData= null;

  @ViewChild('myInput2')  myInput2: ElementRef;
  reqData2= null;

  constructor() { }

  ngOnInit() :void {
    // const searchTerm = fromEvent(this.myInput.nativeElement,'keyup');
    // searchTerm.subscribe(res=>{  })
  }
  ngAfterViewInit() :void {

    //Exp -01 - Debounce Time
    const searchTerm = fromEvent<any>(this.myInput.nativeElement,'keyup').pipe(
      map(event => event.target.value),
      debounceTime(1000))
    searchTerm.subscribe(res=>{ 
      // consosle.log(res)
      this.reqData = res;
      setTimeout(()=>{
        this.reqData = null;
      },2000)
     })

     //Exp -01 - DistinctUntilChanged
     const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement,'keyup').pipe(
      map(event => event.target.value),
      debounceTime(1000),
      distinctUntilChanged()
      )
    searchTerm2.subscribe(res=>{ 
      console.log(res)
      this.reqData2 = res;
      setTimeout(()=>{
        this.reqData2 = null;
      },2000)
     })

  }


}
