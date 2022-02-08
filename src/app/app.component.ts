import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appname = 'FIRST COMPONENT';
  developer="Johnson"
  names=["raj","Rahul","Naveen","Joseph","Anderson"]
  theme="theme1"


  toggleTheme(){
     this.theme=this.theme=="theme1"?"theme2":"theme1";
  }
}
