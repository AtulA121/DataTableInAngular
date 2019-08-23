import { Component, OnInit } from '@angular/core';
import { EmployeeFormsServiceService } from '../employee-forms-service.service';
  
@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.css']
})
export class EmployeeDialogComponent implements OnInit {

  departments = [
    {id : 1 , name : "science"},
    {id : 2 , name : "art"},
    {id : 3 , name : "commerse"}
  ];

  constructor(private _empForm : EmployeeFormsServiceService) { }

  ngOnInit() {
  }

}
