import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';

import {HttpClientModule} from '@angular/common/http';

import {MatTableModule, MatIconModule, MatSortModule, MatPaginatorModule} from '@angular/material'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';
import { EmployeeMaterialModule } from './employee-material/employee-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeDialogComponent } from './employee-dialog/employee-dialog.component';
import { EmployeeFormsServiceService } from './employee-forms-service.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    EmployeeMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EmployeeFormsServiceService
  ],
  bootstrap: [AppComponent],
  entryComponents : [
    EmployeeDialogComponent
  ]
})
export class AppModule { }
