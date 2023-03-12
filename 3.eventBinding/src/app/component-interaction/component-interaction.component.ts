import { Component } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent {
  pageTitle = "component Interaction";
  public name = "Harsh"

  // from child
  public message =""
}
