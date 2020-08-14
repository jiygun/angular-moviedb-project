import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faStar, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Series } from '../core/models/series/series';
import { ContentModel } from '../core/models/shared/content.model';
import { ShowCredit } from '../core/models/show.credit/show.credit';
import { CreditService } from '../core/services/credit.service';
import { SeriesService } from '../core/services/series.service';
import { Statics } from '../core/statics/statics';
import { Alert } from '../shared/alert.creator';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  private _faStar:IconDefinition;
  
  private _seriesShow:Series;
  private _credit:ShowCredit;

  private _mainCastList:Array<ContentModel>;
  private _moreCastList:Array<ContentModel>;

  private _contentTitle:string;
  private _routerPath:string;
  private _mainImagePath:string;
  private _imageNullPath:string;

  private _isMoreOpen:boolean;

  private _isLoad:boolean;
  constructor(private seriesService:SeriesService,private creditService:CreditService,private activatedRoute:ActivatedRoute,private componentFactoryResolver:ComponentFactoryResolver,private viewContainerRef:ViewContainerRef) {
    this._mainCastList=new Array();
    this._moreCastList=new Array();
    this._seriesShow=new Series();
    this._credit=new ShowCredit();
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
      this.seriesService.getSeriesWithById(parseInt(result.get('id'))).subscribe((series:Series)=>{
        this._seriesShow=series;
      },(error=>{
        new Alert(error,null,null,this.viewContainerRef,this.componentFactoryResolver);
      }));
      this.creditService.getSerieCreditsWithById(parseInt(result.get('id'))).subscribe((credit:ShowCredit)=>{
        this._credit=credit;
        credit.casts.splice(0,5).forEach(element => {
          this._mainCastList.push(new ContentModel(element.id,element.name,element.profilePath,element.character));
        });
        credit.casts.forEach(element => {
          this._moreCastList.push(new ContentModel(element.id,element.name,element.profilePath,element.character));
        });
        this._isLoad=false;
      },(error=>{
        new Alert(error,null,null,this.viewContainerRef,this.componentFactoryResolver);
      }));
    });
  }
  showMoreCast(){
    this._isMoreOpen==true?this._isMoreOpen=false:this._isMoreOpen=true;
  }  
  get series():Series{
    return this._seriesShow;
  }
  get credit():ShowCredit{
    return this._credit;
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
  get contentTitle():string{
    return this._contentTitle;
  }
  get routerPath():string{
    return this._routerPath;
  }
  get isLoad():boolean{
    return this._isLoad;
  }
  get faStar():IconDefinition{
    return this._faStar;
  }
}
