import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { faStar, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Movie } from '../core/models/movie/movie';
import { CreditService } from '../core/services/credit.service';
import { MovieService } from '../core/services/movie.service';
import { ContentModel } from '../core/models/shared/content.model';
import { Statics } from '../core/statics/statics';
import { ActivatedRoute } from '@angular/router';
import { ShowCredit } from '../core/models/show.credit/show.credit';
import { Alert } from '../shared/alert.creator';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  private _faStar:IconDefinition;

  private _movieShow:Movie;

  private _mainCastList:Array<ContentModel>;
  private _moreCastList:Array<ContentModel>;

  private _contentTitle:string;
  private _routerPath:string;
  private _mainImagePath:string;
  private _imageNullPath:string;

  private _isMoreOpen:boolean;

  private _isLoad:boolean;
  constructor(private movieService:MovieService,private creditService:CreditService,private activatedRoute:ActivatedRoute,private componentFactoryResolver:ComponentFactoryResolver,private viewContainerRef:ViewContainerRef) {
    this._mainCastList=new Array();
    this._moreCastList=new Array();
    this._movieShow=new Movie();
    this._faStar=faStar;
    this._mainImagePath=Statics.ImagePaths.mainImagePath;
    this._imageNullPath=Statics.ImagePaths.nullImagePath;
    this._isMoreOpen=true;
    this._isLoad=true;
    this._contentTitle="Cast List";
    this._routerPath=Statics.UrlPaths.personPath;
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((result)=>{
      this.movieService.getMovieWithById(parseInt(result.get('id'))).subscribe((movie:Movie)=>{
        this._movieShow=movie;
      },
      (error=>{
        new Alert(error,null,null,this.viewContainerRef,this.componentFactoryResolver);
      }));
      this.creditService.getMovieCreditsWithById(parseInt(result.get('id'))).subscribe((credit:ShowCredit)=>{
        credit.casts.splice(0,5).forEach(element => {
          this._mainCastList.push(new ContentModel(element.id,element.name,element.profilePath,element.character));
        });
        credit.casts.forEach(element => {
          this._moreCastList.push(new ContentModel(element.id,element.name,element.profilePath,element.character));
        });
        this._isLoad=false;
      },
      (error=>{
        new Alert(error,null,null,this.viewContainerRef,this.componentFactoryResolver);
      }));
    });
  }
  showMoreCast(){
    this._isMoreOpen==true?this._isMoreOpen=false:this._isMoreOpen=true;
  }
  get movie():Movie{
    return this._movieShow;
  }
  get mainCastList():Array<ContentModel>{
    return this._mainCastList;
  }
  get moreCastList():Array<ContentModel>{
    return this._moreCastList;
  }
  get mainImagePath():string{
    return this._mainImagePath;
  }
  get imageNullPath():string{
    return this._imageNullPath;
  }
  get isMoreOpen():boolean{
    return this._isMoreOpen;
  }
  get isLoad():boolean{
    return this._isLoad;
  }
  get contentTitle():string{
    return this._contentTitle;
  }
  get routerPath():string{
    return this._routerPath;
  }
  get faStar():IconDefinition{
    return this._faStar;
  }
}
