import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryPipe } from './pipes/textsummary.pipe';
import { AlertComponent } from './alert.component';
import { SharedRoutingModule } from "./shared-routing.module";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SummaryPipe,
    AlertComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    SharedRoutingModule,
    AlertComponent,
    SummaryPipe
  ],
  entryComponents:[
    AlertComponent
  ]
})
export class SharedModule { }
