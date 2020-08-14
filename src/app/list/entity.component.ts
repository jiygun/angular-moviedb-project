import { Component, Input, OnInit } from '@angular/core';
import { ContentModel } from '../core/models/shared/content.model';
import { Statics } from '../core/statics/statics';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent implements OnInit {
  
  @Input() mainContentList:Array<ContentModel>;
  @Input() moreContentList:Array<ContentModel>;
  @Input() contentHeader:string;
  @Input() routerPath:string;
  
  private _mainImagePath:string;
  private _imageNullPath:string;

  private _isMoreOpen:boolean;

  constructor() { 
    this._mainImagePath=Statics.ImagePaths.mainImagePath;
    this._imageNullPath=Statics.ImagePaths.nullImagePath;
    this._isMoreOpen=true;
  }
  ngOnInit(): void {
  }
  showMoreCast(){
    this._isMoreOpen==true?this._isMoreOpen=false:this._isMoreOpen=true;
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
  get isMainFull():boolean{
    return this.mainContentList.length==5&&this.moreContentList.length>0?true:false;
  }
}
