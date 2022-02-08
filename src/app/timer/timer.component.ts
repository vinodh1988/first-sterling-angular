import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
time:number=500;
interval:any;

  constructor() {
       this.interval=setInterval(this.countDown.bind(this),1000);
   }

  ngOnInit(): void {
  }

  countDown(){
    console.log("Called")
    console.log(this.time)
    this.time-=1;
    console.log(this.time);
    if(this.time==0)
      this.time=500;
  }

}
