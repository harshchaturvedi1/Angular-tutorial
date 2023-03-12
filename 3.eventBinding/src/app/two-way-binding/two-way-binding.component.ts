import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
  <br><br><br>
  <h2>3. two way binding</h2>
  <li>templeate to class & vice-versa</li>
  
  <input [(ngModel)]="name" type="text">
  {{name}}
  `,
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {

  constructor(){}

  public name=""

}
