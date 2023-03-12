import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
  <h3>7.2 Employee Details [using data from a service] </h3>
  <ul *ngFor="let employee of employees">
    <li>{{employee?.id}}.{{" "+ employee?.name}} {{" - " + employee?.age}}</li>
  </ul>
  `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {


  public employees: { id: number, name: string, age: number }[] = []
  // public employees: {name: string}[] = []


  constructor(private _employeeService: EmployeeService) { }

  // this is a lifecycle method which gets called once the component gets initialized
  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees()
  }

}
