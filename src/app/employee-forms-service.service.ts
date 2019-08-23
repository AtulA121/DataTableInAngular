import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeFormsServiceService {

  form : FormGroup=new FormGroup({
    $key : new FormControl(null),
    empName : new FormControl("",Validators.required),
    empAge : new FormControl(""),
    empAddress : new FormControl("",[Validators.required,Validators.minLength(5)]),
    empEmail : new FormControl("",Validators.email),
    empEducation : new FormControl(""),
    empGender : new FormControl(1),
    empDepartment : new FormControl(0),
    empDate : new FormControl(""),
    isPermanent : new FormControl(false)
  });

  constructor() { }
}
