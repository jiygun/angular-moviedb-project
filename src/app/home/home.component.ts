import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Result } from '../core/models/result/result';
import { ShowSummary } from '../core/models/shared/show.summary';
import { MovieService } from '../core/services/movie.service';
import { SeriesService } from '../core/services/series.service';
import { Statics } from '../core/statics/statics';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private _movieHeader:string;
  private _seriesHeader:string;

  private _movieId:number;
  private _seriesId:number;

  private _movieLastList:Array<ShowSummary>;
  private _seriesLastList:Array<ShowSummary>;

  constructor(private movieService:MovieService,private seriesService:SeriesService) {
    this._movieHeader="Movies In Theatre";
    this._seriesHeader="TV Series Today";
    this._movieId=Statics.ShowPathIds.moviePathId;
    this._seriesId=Statics.ShowPathIds.seriesPathId;
  }

  ngOnInit(): void {
    this.movieService.getOnPlay().subscribe((result:Result)=>{this._movieLastList=result.showSummary.slice(0,12);},(error=>{}));
    this.seriesService.getOnPlay().subscribe((result:Result)=>{this._seriesLastList=result.showSummary.slice(0,12)},(error=>{}));
  }
  get movieLastList():Array<ShowSummary>{
    return this._movieLastList;
  }
  get seriesLastList():Array<ShowSummary>{
    return this._seriesLastList;
  }
  get movieHeader():string{
    return this._movieHeader;
  }
  get seriesHeader():string{
    return this._seriesHeader;
  }
  get movieId():number{
    return this._movieId;
  }
  get seriesId():number{
    return this._seriesId;
  }
}
