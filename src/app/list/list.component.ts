import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  employeeData: any[] = [];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeService.getAllEmployee().subscribe((data) => {
      this.employeeData = data;
    });
  }

  editEmployee(id: any){
    this.router.navigate(['/edit-employee', id])
  }

  // Deleting the Obj from table

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      alert('Sure! Want to Delete this user');
      this.employeeData = this.employeeData.filter((employee) => employee.id !== id);
    });
  }
  }
