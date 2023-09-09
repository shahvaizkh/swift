import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  employeeForm!: FormGroup;
  personData!: any[];
  userId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.userId = this.activatedRoute.snapshot.params['userId'];
    if (this.userId) {
      this.getUserById(this.userId);
    }
  }

  initializeForm(): void {
    this.employeeForm = this.formBuilder.group({
      first: ['', Validators.required],
      last: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const formValues = this.employeeForm.value;

      if (this.userId > 0) {
        this.employeeService
          .editEmployee(this.userId, formValues)
          .subscribe((res) => {
            alert('Edit Updated : ' + ' ' + res.first);
          });
      } else {
        this.employeeService
          .postAllEmployee(formValues)
          .subscribe((response: any) => {
            alert('Post Created : ' + ' ' + response.first);
          });
      }
      this.router.navigate(['/list']);
    }
  }

  getUserById(userId: any) {
    this.employeeService.getById(userId).subscribe((response: any) => {
      this.employeeForm.patchValue(response);
    });
  }
}
