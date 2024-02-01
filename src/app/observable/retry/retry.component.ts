import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';
import { delay, retry, retryWhen, scan } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {

  constructor(private http : HttpClient ) { }

  person;
  fetching:boolean = false;
  status = 'No Data';

  ngOnInit() :void{
    // this.fetchDetails();
  }

  fetchDetails(){
    this.fetching=true;
    this.status = 'Fetching Data...';
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').pipe(
      // retry(2))
      retryWhen(err=>err.pipe(
        delay(3000),
        scan((retryCount)=>{
          if(retryCount>=5){
            throw err;
          }else{
            retryCount = retryCount + 1;
            console.log('retry count=>'+ retryCount)
            this.status = 'Retrying Attempt #' + retryCount;
            return retryCount;
          }
        },0)
      )))
    .subscribe((res)=>{
      console.log(res)
      this.person = res;
      this.status = 'Data Fetched';
      this.fetching=false;
    },
    (error)=>{
      console.log(error);
      this.status = 'Problem Fetching Data';
      this.fetching=false;
    })
  }
}
