import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

private apiUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  
  getAllEmployee(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  postAllEmployee(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  editEmployee(id: number, data: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, data);
  }

  deleteEmployee(id: number): Observable<any> {
    const abc = `${this.apiUrl}/${id}`;
    return this.http.delete(abc);
  }

  getById(userId: number){
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get(url);
  }

}
