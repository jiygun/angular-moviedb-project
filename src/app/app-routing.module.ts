import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { MovieListComponent } from './movie/movielist.component';
import { SeriesListComponent } from './series/serieslist.component';
import { PersonListComponent } from './person/personlist.component';
import { MovieComponent } from './movie/movie.component';
import { SeriesComponent } from './series/series.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'movie',component:MovieListComponent},
  {path:'series',component:SeriesListComponent},
  {path:'people',component:PersonListComponent},
  {path:'movie/:id',component:MovieComponent},
  {path:'series/:id',component:SeriesComponent},
  {path:'people/:id',component:PersonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
