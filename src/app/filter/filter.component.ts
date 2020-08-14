import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Filter } from '../core/models/shared/filter';
import { Statics } from '../core/statics/statics';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit,DoCheck,OnChanges {

  selectedFilter:string="popularity.desc";

  @Input() showId:number;

  @Output() filterQuery:EventEmitter<string>;

  private _filterList:Array<Filter>;
  
  constructor() { 
    this.filterQuery=new EventEmitter<string>();
    this._filterList=new Array();
  }

  ngOnInit(): void {
    this.showId!=undefined?this.showId==Statics.ShowPathIds.seriesPathId?
    (this._filterList=Statics.FilterLists.seriesFilterList):
    (this._filterList=Statics.FilterLists.movieFilterList):this._filterList=Statics.FilterLists.movieFilterList;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.showId!=undefined?this.showId==Statics.ShowPathIds.seriesPathId?
    (this._filterList=Statics.FilterLists.seriesFilterList):
    (this._filterList=Statics.FilterLists.movieFilterList):this._filterList=Statics.FilterLists.movieFilterList;
  }
  
  ngDoCheck(): void {
    this.filterQuery.emit(this.selectedFilter);
  }
  get filterList():Array<Filter>{
    return this._filterList;
  }
}
