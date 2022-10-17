import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

const materials =[MatButtonModule,MatInputModule, MatRadioModule,MatDialogModule,MatIconModule,MatDatepickerModule,MatNativeDateModule]

@NgModule({

  imports: [materials
    
  ],
  exports:[materials]
})
export class MaterialModule { }
