import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
  <h3>7.1 Employee list [using data from a service] </h3>
  <ul *ngFor="let employee of employees">
    <li>{{employee?.name}}</li>
  </ul>
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  
  // public employees: { id: number, name: string, age: number }[] = []
  public employees: {name: string}[] = []


  constructor(private _employeeService: EmployeeService) { }

  // this is a lifecycle method which gets called once the component gets initialized
  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees()
  }

}
