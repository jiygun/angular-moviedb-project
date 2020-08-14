import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person.component';
import { AngularPaginateModule } from 'angular-paginate';
import { PersonListComponent } from './personlist.component';
import { ListModule } from '../list/list.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PersonComponent,
    PersonListComponent
  ],
  imports: [
    CommonModule,
    ListModule,
    SharedModule,
    AngularPaginateModule,
    FontAwesomeModule,
    PersonRoutingModule
  ]
})
export class PersonModule { }
