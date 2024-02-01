import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  exclusive = new Subject<boolean>();
  // userName = new Subject<string>();//Example of subject
  userName = new BehaviorSubject<string>( 'Rajat');//Example of behaviour subject(Behaviour subject is used to stored one value)

  videoEmit = new ReplaySubject<string>(3)
  // videoEmit = new ReplaySubject<string>(3,5)//We can also set a time limit to replay subject

  //It will emit its latest value to all its observers on completion.
  asyncVideoEmit = new AsyncSubject();
  


  constructor() { }

  //We made a function that takes 2 parameters and append a new 'li' 
  // element with the provided text'val' to a specific ID(containerID).
  print(val: string,containerID: string){
    let elem = document.createElement('li');
    elem.innerText=val;//putting data to li
    document.getElementById(containerID).appendChild(elem)
  }
}
