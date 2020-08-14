import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PopularComponent } from './popular.component';
import { SliderAngularModule } from 'slider-angular';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SliderComponent } from './slider.component';

@NgModule({
  declarations: [
    HomeComponent,
    PopularComponent,
    SliderComponent,
  ],
  imports: [
    CommonModule,
    SliderAngularModule,
    SharedModule,
    FontAwesomeModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
