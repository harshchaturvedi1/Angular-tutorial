import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-passing-data',
  template: `
    <h3>5.1 Child component</h3>

    <!--  recieving data from parent -->
    <!-- <p>{{"Hello " + parentData}}</p> -->
    <p>{{"Hello " + name}}</p>

    <p>{{"Hello " + otherName}}</p>



    <!-- sending data to parent -->
    <button (click)="fireEvent()">Send Event</button>

  `,
  styleUrls: ['./passing-data.component.css']
})
export class PassingDataComponent {

  //-------- recieving data from parent -------- 

  // @Input() public parentData:any;
  @Input("parentData") public name:any;
  @Input() public otherName:any;



  // -------- sending data to parent -------- 
  @Output() public childEvent = new EventEmitter();
  fireEvent(){
    this.childEvent.emit('This data is from child component')
  }

}
