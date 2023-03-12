import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  template: `

  <h2>4 . Structural directiveh2>

    <!-- <h2 *ngIf="displayName">ngIf tutorial</h2> -->

    <!-- <h2 *ngIf="displayName; else thenBlock">ngIf tutorial</h2> -->

    <!-- <h2 *ngIf="displayName; else elseBlock">ngIf tutorial</h2> -->

    <h2 *ngIf="displayName; then thenBlock; else elseBlock">ngIf tutorial</h2>




    <ng-template #thenBlock>

      <h2>harsh</h2>
    </ng-template>

    <ng-template #elseBlock>
      <h2>Name is hidden</h2>
    </ng-template>
  `,
  styles: [],
})
export class StructuralDirectiveComponent {
  displayName = false;
  // displayName = true

  constructor() {}

  ngOnInit() {}
}
