import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports:[
    CategoryComponent
  ]
})
export class CategoryModule { }
