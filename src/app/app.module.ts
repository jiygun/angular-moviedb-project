import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from "./shared/layout/footer/footer.component";
import { HeaderComponent } from "./shared/layout/header/header.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HomeModule } from "./home/home.module";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { MovieModule } from "./movie/movie.module";
import { SeriesModule } from "./series/series.module";
import { ListModule } from "./list/list.module";
import { FilterModule } from "./filter/filter.module";
import { CategoryModule } from "./category/category.module";
import { AngularPaginateModule } from 'angular-paginate';
import { CompanyModule } from './company/company.module';
import { PersonModule } from './person/person.module';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    CoreModule,
    MovieModule,
    SeriesModule,
    ListModule,
    FilterModule,
    CategoryModule,
    CompanyModule,
    PersonModule,
    SearchModule,
    AngularPaginateModule,
    SharedModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
