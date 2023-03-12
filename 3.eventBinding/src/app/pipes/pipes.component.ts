import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
  <h2>6. Pipes</h2>
  <li>pipe operator transforms data only for view & not the actual property or value of data</li>
  <p>{{name}}</p>
  <p>{{name | lowercase}}</p>
  <p>{{name | uppercase}}</p>
  <p>{{message | titlecase}}</p>
  <p>{{message | slice:3:5}}</p>
  <p>{{person | json}}</p> 

  <!-- numbers -->
  <p>{{5.678 | number:"1.2-3"}}</p>
  <p>{{5.678 | number:"3.4-5"}}</p>
  <p>{{5.678 | number:"3.1-2"}}</p>

  <!-- percentage -->
  <p>{{.25 | percent}}</p>


  <!-- currency -->
  <p>{{.25 | currency}}</p>
  <p>{{.25 | currency:"INR"}}</p>
  <p>{{.25 | currency:"GBP"}}</p>
  <p>{{.25 | currency:"INR" : "code"}}</p>


  <!-- date -->
  <p>{{date}}</p>
  <p>{{date | date}}</p>
  <p>{{date | date:"short"}}</p>
  <p>{{date | date : "shortDate"}}</p>
  <p>{{date | date : "shortTime"}}</p>




  `,
  styleUrls: ['./pipes.component.css']
})



export class PipesComponent {
  public name = "Harsh"

  public message = "Welcome to angular tutorial"

  public person = {
    'firstName': "Harsh",
    "lastName": "Chaturvedi"
  }

  public date = new Date()
}
