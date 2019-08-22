import { NgModule } from '@angular/core';
import { MatTableModule, MatPaginatorModule, MatIconModule, MatSortModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';

const empMaterials=[
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
];

@NgModule({
  imports : [
    empMaterials
  ],
  exports : [
    empMaterials
  ]
})
export class EmployeeMaterialModule { }
