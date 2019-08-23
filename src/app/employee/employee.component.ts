import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { EmployeeDialogComponent } from '../employee-dialog/employee-dialog.component';

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

  constructor(private _empService : EmployeeService,private _dialog : MatDialog) { }

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

  openCreatePopup(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="100px;"
    this._dialog.open(EmployeeDialogComponent,dialogConfig);
  }

}
