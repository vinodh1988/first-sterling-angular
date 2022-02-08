import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
names=['Roger','Ravi','Naresh','Kiran','Jay']
name= "Default"
  constructor() { }

  changeName(x:string){
    this.name=x;
  }

  ngOnInit(): void {
  }

}
