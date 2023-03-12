import { Component } from '@angular/core';

// a "#" symbol with name
@Component({
  selector: 'app-template-reference-variable',
  template: `
  <br><br><br>
  <h2>2. templeate reference variable</h2>
    <input #myInput type="text" />
    <button (click)="logMessage(myInput.value)" >log</button>
  `,
  styleUrls: ['./template-reference-variable.component.css'],
})
export class TemplateReferenceVariableComponent {
  constructor() {}
  logMessage(value: any) {
    console.log(value);
  }
}
