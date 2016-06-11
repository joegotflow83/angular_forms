import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Employee} from './employee';

@Component({
    selector: '<employee-form></employee-form>'
    templateUrl: 'app/ts/employee-form-component.html'
})

export class EmployeeFormComponent {
    model = new Employee('Joe Moran');

    submitted = false;

    onSubmit() {
        this.submitted = true;
    }

    active = true;

    newEmployee() {
        this.model = new Employee('John Wick');
    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }
}
