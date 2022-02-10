import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-box',
  templateUrl: './menu-box.component.html',
  styleUrls: ['./menu-box.component.css']
})
export class MenuBoxComponent implements OnInit {
 @Input('menuitem') current:any;
  constructor() { }

  ngOnInit(): void {
  }

}
