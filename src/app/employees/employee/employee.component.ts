import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../shared/employee.service';
import { ToastrService } from 'ngx-toastr';
import { Department } from '../shared/department.model';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],

  animations: [
    trigger('logoAni', [
        transition('* => *', [
            query(':enter', style({ opacity: 0 }), { optional: true }),
            query(':enter', stagger('100ms', [
                animate('1s', style({ opacity: 1 }))
            ]), { optional: true })
        ])
    ])
]
})
export class EmployeeComponent implements OnInit {



departments: Department[] = [
  { id: 1, name: 'Help Desk' },
  { id: 2, name: 'HR' },
  { id: 3, name: 'IT' },
  { id: 4, name: 'Payroll' }
];
  constructor(private employeeService: EmployeeService , private tostr: ToastrService) { }

  ngOnInit() {

    this.resetForm();
  }
  onSubmit(employeeForm: NgForm) {
    if (employeeForm.value.$key == null) {
    this.employeeService.insertEmployee(employeeForm.value);
    } else {
    this.employeeService.updateEmployee(employeeForm.value);
    }
  this.resetForm(employeeForm);
  this.tostr.success('Submitted Succcessfully', 'Employee Register');
  }

  resetForm(employeeForm?: NgForm) {
    if (employeeForm != null) {
      employeeForm.reset();
    }

    this.employeeService.selectedEmployee = {
      $key: null,
      name: '',
      email: '',
      phone: '',
      gender: '',
    //  dateofbirth: '',
      position: '',
      office: '',
      salary: 0,
    };
  }

}
