import { Component, OnInit, Input,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {
  @Input('names') programmers:string[]=[]
  @Input() boxtitle:string=""
  @Output('choose') selectProgrammer:EventEmitter<string>=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  chosen(x:string){
    this.selectProgrammer.emit(x);
  }

}
