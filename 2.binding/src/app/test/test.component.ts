import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  template: `
    <!-- dynamic data -->
    <p>Welcome {{ name }}</p>
    <p>{{ name.length }}</p>

    <h2>{{ '2' + 2 }}</h2>
    <h2>{{ 2 + 2 }}</h2>

    <h2>{{ 'welcome' + name }}</h2>

    <h2>{{ getUser() }}</h2>

    <!-- property vs attribute -->

    <input type="text" [id]="myId" value="harsh" />
    <br />
    <input type="text" id="{{ myId }}" value="harsh" />

    <!-- css and property binding conditional css -->

    <h2 class="text-success">Success</h2>
    <h2 [class]="successClass">Success</h2>
    <h2 class="{{ successClass }}">Success</h2>

    <!-- conditional classes -->
    <h2 [class.text-danger]="hasError">Success</h2>

    <!-- multiple classes -->
    <h2 [ngClass]="messageClasses">Success</h2>

  `,
  // styleUrls: ['./test.component.css']
  styles: [
    `
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
    `,
  ],
})
export class TestComponent {
  public name = 'harsh';
  public myId = 'testId';
  public successClass = 'text-success';
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    'text-success':!this.hasError,
    'text-danger':this.hasError,
    'text-special':this.isSpecial
  }

  public inputName = ""


  constructor() {}

  ngOnInit() {}

  getUser() {
    return 'hello' + this.name;
  }

 
}
