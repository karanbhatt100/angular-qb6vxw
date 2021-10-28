import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee } from './employee.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Karan';

  empList: Employee[] = [];

  inputForm = new FormGroup({
    firstName: new FormControl(),
    middleName: new FormControl(),
    lastName: new FormControl(),
    employeeCode: new FormControl(),
    designation: new FormControl(),
    department: new FormControl(),
    dob: new FormControl(),
    gender: new FormControl(),
    email: new FormControl(),
    mobile: new FormControl(),
  });

  submit() {
    window.alert(JSON.stringify(this.inputForm.value));
    let empEle: Employee = {
      firstName: this.inputForm.get('firstName').value,
      middleName: this.inputForm.get('middleName').value,
      lastName: this.inputForm.get('lastName').value,
      employeeCode: this.inputForm.get('employeeCode').value,
      designation: this.inputForm.get('designation').value,
      department: this.inputForm.get('department').value,
      dob: this.inputForm.get('dob').value,
      gender: this.inputForm.get('gender').value,
      email: this.inputForm.get('email').value,
      mobile: this.inputForm.get('mobile').value,
    };
    this.empList.push(empEle);
    window.alert(JSON.stringify(empEle));
  }
}
