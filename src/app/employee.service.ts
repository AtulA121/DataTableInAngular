import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url : string="http://localhost:8080/getEmployeeData";
  constructor(private _http : HttpClient) { }

  getEmployees(page : number) : Observable<any>
  {
    return this._http.get(this.url+"?page="+page);
  }

}
