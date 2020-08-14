import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from "../movie/movie.component";
import { SeriesComponent } from "../series/series.component";

const routes: Routes = [
  {path:'movie/:id',component:MovieComponent},
  {path:'series/:id',component:SeriesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
