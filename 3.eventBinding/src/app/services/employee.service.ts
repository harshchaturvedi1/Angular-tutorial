import { Injectable } from '@angular/core';

// injectable is a decorator to tell about depencencies
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      { id: 1, name: "Harsh", age: 24 },
      { id: 2, name: "John", age: 25 },
      { id: 3, name: "Brandon", age: 30 },
      { id: 4, name: "Elena", age: 40 }
    ]
  }

}
