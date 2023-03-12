import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <br />
    <br />
    <h2>1. event binding</h2>
    <button (click)="onclick($event)">greet</button>
    <button (click)="greeting = 'welcome harsh'">greet</button>

    <input type="text" [value]="name" (change)="onChange($event)" />

    {{ greeting }}
  `,
  styles: [``],
})
export class TestComponent {
  public greeting = '';
  public name = '';

  constructor() {}

  onChange(event: any) {
    console.log(event.target.value);
    this.name = event.target.value;
  }

  onclick(event: any) {
    console.log('welcome to event binding');
    console.log(event);

    console.log(event.type);
    this.greeting = 'Welcome to event binding';
  }
}
