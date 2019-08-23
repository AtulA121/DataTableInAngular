import { NgModule } from '@angular/core';
import { MatTableModule, MatPaginatorModule, MatIconModule, MatSortModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule, MatToolbarModule, MatGridListModule, MatRadioModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule } from '@angular/material';

const empMaterials=[
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatGridListModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
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
