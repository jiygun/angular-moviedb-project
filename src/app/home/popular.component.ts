import { Component, Input, OnInit } from '@angular/core';
import { ShowSummary } from "../core/models/shared/show.summary";
import { Statics } from "../core/statics/statics";

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  @Input() showList:Array<ShowSummary>;
  @Input() headerTitle:string;
  @Input() footerTitle:string;
  @Input() showId:number;

  private _mainImagePath:string;
  private _imageNullPath:string;
  
  constructor() { 
    this.showList=new Array();
    this.headerTitle="";
    this.footerTitle="";
    this.showId=Statics.ShowPathIds.moviePathId;
    this._mainImagePath=Statics.ImagePaths.mainImagePath;
    this._imageNullPath=Statics.ImagePaths.nullImagePath;
  }

  ngOnInit(): void {
  }
  get routerPath():string{
    return this.showId==Statics.ShowPathIds.moviePathId?Statics.UrlPaths.moviePath:Statics.UrlPaths.seriesPath;
  }
  get mainImagePath():string{
    return this._mainImagePath;
  }
  get imageNullPath():string{
    return this._imageNullPath;
  }
}
