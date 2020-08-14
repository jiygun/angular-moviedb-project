import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ShowSummary } from '../core/models/shared/show.summary';
import { Statics } from '../core/statics/statics';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit,OnChanges {

  @Input() showList:Array<ShowSummary>;
  @Input() showId:number;

  @Output() hoveredShow:EventEmitter<ShowSummary>;

  faStar;
  private _imageNullPath:string;
  private _mainImagePath:string;

  private _routerLink:string;

  constructor() {
    this.hoveredShow=new EventEmitter();
    this.faStar=faStar;
    this._mainImagePath=Statics.ImagePaths.mainImagePath;
    this._imageNullPath=Statics.ImagePaths.nullImagePath;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this._routerLink=this.showId==Statics.ShowPathIds.seriesPathId?Statics.UrlPaths.seriesPath:Statics.UrlPaths.moviePath;
  }
  ngOnInit(): void {
  }
  get mainImagePath():string{
    return this._mainImagePath;
  }
  get imageNullPath():string{
    return this._imageNullPath;
  }
  get routerLink():string{
    return this._routerLink;
  }
  mouseOver(show:ShowSummary){
    this.hoveredShow.emit(show);
  }
}
