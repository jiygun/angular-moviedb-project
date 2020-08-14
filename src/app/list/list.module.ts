import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EntityComponent } from './entity.component';

@NgModule({
  declarations: [
    ListComponent,
    EntityComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    ListRoutingModule
  ],
  exports:[
    ListComponent,
    EntityComponent
  ]
})
export class ListModule { }
