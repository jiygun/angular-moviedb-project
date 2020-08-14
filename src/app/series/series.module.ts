import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { SharedModule } from "../shared/shared.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SeriesComponent } from './series.component';
import { FilterModule } from '../filter/filter.module';
import { CategoryModule } from '../category/category.module';
import { AngularPaginateModule } from 'angular-paginate';
import { ListModule } from '../list/list.module';
import { SeriesListComponent } from './serieslist.component';
import { CompanyModule } from '../company/company.module';

@NgModule({
  declarations: [
    SeriesComponent,
    SeriesListComponent
  ],
  imports: [
    CommonModule,
    FilterModule,
    CategoryModule,
    ListModule,
    CompanyModule,
    AngularPaginateModule,
    SharedModule,
    FontAwesomeModule,
    SeriesRoutingModule
  ]
})
export class SeriesModule { }
