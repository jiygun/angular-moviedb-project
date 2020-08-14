import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { SharedModule } from "../shared/shared.module";
import { MovieComponent } from "./movie.component";
import { MovieListComponent } from './movielist.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterModule } from '../filter/filter.module';
import { CategoryModule } from '../category/category.module';
import { AngularPaginateModule } from 'angular-paginate';
import { ListModule } from '../list/list.module';
import { CompanyModule } from '../company/company.module';

@NgModule({
  declarations: [
    MovieComponent,
    MovieListComponent
  ],
  imports: [
    CommonModule,
    FilterModule,
    CategoryModule,
    ListModule,
    CompanyModule,
    AngularPaginateModule,
    FontAwesomeModule,
    SharedModule,
    FontAwesomeModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
