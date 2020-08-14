import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { MovieCredit } from '../core/models/credit/movie.credit';
import { SeriesCredit } from '../core/models/credit/series.credit';
import { Person } from '../core/models/person/person';
import { ContentModel } from '../core/models/shared/content.model';
import { CreditService } from '../core/services/credit.service';
import { MovieService } from '../core/services/movie.service';
import { PersonService } from '../core/services/person.service';
import { SeriesService } from '../core/services/series.service';
import { Statics } from '../core/statics/statics';
import { Alert } from '../shared/alert.creator';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  faHeart;

  private _people:Person;
  private _mainMovieList:Array<ContentModel>;
  private _moreMovieList:Array<ContentModel>;
  private _mainSeriesList:Array<ContentModel>;
  private _moreSeriesList:Array<ContentModel>;

  private _mainImagePath:string;
  private _imageNullPath:string;

  private _isMovieMoreOpen:boolean;
  private _isSeriesMoreOpen:boolean;

  private _movieContentTitle:string;
  private _seriesContentTitle:string;
  private _movieRouterPath:string;
  private _seriesRouterPath:string;
  
  constructor(private peopleService:PersonService,private movieService:MovieService,private seriesService:SeriesService,
    private creditService:CreditService,private activatedRoute:ActivatedRoute,private componentFactoryResolver:ComponentFactoryResolver,private viewContainerRef:ViewContainerRef) {
    this._mainImagePath=Statics.ImagePaths.mainImagePath;
    this._imageNullPath=Statics.ImagePaths.nullImagePath;
    this.faHeart=faHeart;
    this._isMovieMoreOpen=true;
    this._isSeriesMoreOpen=true;
    this._mainMovieList=new Array();
    this._moreMovieList=new Array();
    this._mainSeriesList=new Array();
    this._moreSeriesList=new Array();
    this._movieContentTitle="Movie List";
    this._seriesContentTitle="Series List";
    this._movieRouterPath=Statics.UrlPaths.moviePath;
    this._seriesRouterPath=Statics.UrlPaths.seriesPath;
    this._people=new Person();
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((result)=>{
      this.peopleService.getPeopleWithById(parseInt(result.get('id'))).subscribe((person:Person)=>{
        this._people=person;
        this.creditService.getMovieCreditsWithByPeopleId(parseInt(result.get('id'))).subscribe((credit:MovieCredit)=>{
          credit.casts.splice(0,5).forEach(element => {
            this._mainMovieList.push(new ContentModel(element.id,element.title,element.posterPath,null));
          });
          credit.casts.forEach(element => {
            this._moreMovieList.push(new ContentModel(element.id,element.title,element.posterPath,null));
          });
        },
        (error=>{
          new Alert(error,null,null,this.viewContainerRef,this.componentFactoryResolver);
        }));
        this.creditService.getSeriesCreditsWithByPeopleId(parseInt(result.get('id'))).subscribe((credit:SeriesCredit)=>{
          credit.casts.splice(0,5).forEach(element => {
            this._mainSeriesList.push(new ContentModel(element.id,element.name,element.posterPath,null));
          });
          credit.casts.forEach(element => {
            this._moreSeriesList.push(new ContentModel(element.id,element.name,element.posterPath,null));
          });
        },
        (error=>{
          new Alert(error,null,null,this.viewContainerRef,this.componentFactoryResolver);
        }));
      },
      (error=>{
        new Alert(error,null,null,this.viewContainerRef,this.componentFactoryResolver);
      }));
    });
  }
  showMovieMoreCast(){
    this._isMovieMoreOpen==true?this._isMovieMoreOpen=false:this._isMovieMoreOpen=true;
  }
  showSeriesMoreCast(){
    this._isSeriesMoreOpen=true?this._isSeriesMoreOpen=false:this._isSeriesMoreOpen=true;
  }
  get people():Person{
    return this._people;
  }
  get mainMovieList():Array<ContentModel>{
    return this._mainMovieList;
  }
  get moreMovieList():Array<ContentModel>{
    return this._moreMovieList;
  }
  get mainSeriesList():Array<ContentModel>{
    return this._mainSeriesList;
  }
  get moreSeriesList():Array<ContentModel>{
    return this._moreSeriesList;
  }
  get mainImagePath():string{
    return this._mainImagePath;
  }
  get imageNullPath():string{
    return this._imageNullPath;
  }
  get isMovieMoreOpen():boolean{
    return this._isMovieMoreOpen;
  }
  get isSeriesMoreOpen():boolean{
    return this._isSeriesMoreOpen;
  }
  get movieContentTitle():string{
    return this._movieContentTitle;
  }
  get seriesContentTitle():string{
    return this._seriesContentTitle;
  }
  get movieRouterPath():string{
    return this._movieRouterPath;
  }
  get seriesRouterPath():string{
    return this._seriesRouterPath;
  }
}
