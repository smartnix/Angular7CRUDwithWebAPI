import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData:Employee;
  lista: Employee[];
  readonly rootURL = "http://localhost:50708/";
  constructor(private http: HttpClient) { }

  postEmployee(formData:Employee){
    return this.http.post(this.rootURL+"api/Employee",formData);
  }

  getEmployee(){
    var k = this.http.get(this.rootURL+"api/Employee").toPromise()
    .then(res=>this.lista = res as Employee[]);
    console.log(k);
    return k;
  }
}
