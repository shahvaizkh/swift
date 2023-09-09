import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;

  name = 'Swiftasol';

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  loginUser(item: any) {
    console.warn(item);
    localStorage.setItem('item', JSON.stringify(item));
    this.router.navigate(['layout']);
  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }
}
