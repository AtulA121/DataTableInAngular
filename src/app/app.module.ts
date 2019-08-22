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

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
