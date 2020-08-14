import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from "./services/movie.service";
import { SeriesService } from "./services/series.service";
import { GenresService } from "./services/genres.service";
import { CreditService } from "./services/credit.service";
import { PersonService } from "./services/person.service";
import { SearchService } from "./services/search.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers:[
    MovieService,
    SeriesService,
    GenresService,
    CreditService,
    PersonService,
    SearchService,
  ]
})
export class CoreModule { }
