import { NgModule } from '@angular/core';
import{MatFormFieldModule} from'@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NativeDateModule } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';




const matarr=[ MatFormFieldModule , MatInputModule, MatIconModule, MatDatepickerModule,NativeDateModule,MatNativeDateModule,MatDialogModule]

@NgModule({

  imports: [
    matarr
  ],
  exports:[matarr]
})
export class MaterialModule { }
