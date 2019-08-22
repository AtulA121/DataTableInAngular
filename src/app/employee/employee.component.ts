import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  page : number=0;
  arr : Array<any>;

  dataSource : MatTableDataSource<any>;
  displayedColumns=["empId","empName","age","email","address","education","actions"];

  constructor(private _empService : EmployeeService) { }

  @ViewChild(MatSort,{static : true}) sort : MatSort;
  @ViewChild(MatPaginator,{static : true}) paginator : MatPaginator;

  searchKey : any;

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
    this._empService.getEmployees(this.page).subscribe(res=>{
      console.log("response : ",res);
      this.arr=res;
      this.dataSource=new MatTableDataSource(this.arr);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
    },err=>{
      console.log("error : ",err);  
    })
  }

  onSearchClear(){
    this.searchKey="";
    this.applyFilter();
  }

  applyFilter(){
    this.dataSource.filter=this.searchKey.trim().toLowerCase();
  }

}
