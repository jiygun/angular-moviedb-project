import { Component, ComponentFactoryResolver, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewContainerRef } from '@angular/core';
import { SearchService } from '../core/services/search.service';
import { Statics } from '../core/statics/statics';
import { Alert } from '../shared/alert.creator';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit,OnChanges {
  
  private _searchResult:Array<any>;

  @Input() searchInput:string;
  @Input() clearSearchSection:boolean;
  @Output() isSearchClicked:EventEmitter<boolean>;

  private _imageNullPath:string;
  private _mainImagePath:string;

  constructor(private searchService:SearchService,private componentFactoryResolver:ComponentFactoryResolver,private viewContainerRef:ViewContainerRef) { 
    this.isSearchClicked=new EventEmitter();
    this._mainImagePath=Statics.ImagePaths.mainImagePath;
    this._imageNullPath=Statics.ImagePaths.nullImagePath;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.searchInput!=undefined&&this.searchInput!==""&&this.clearSearchSection?this.searchService.getResultWithQuery(this.searchInput,null).subscribe(result=>{
      this.searchInput!==""?this._searchResult=result.searchResults.splice(0,3):null;
    },(error=>{
      new Alert(error,null,null,this.viewContainerRef,this.componentFactoryResolver);
    })):this._searchResult=null;
  }

  ngOnInit(): void {
  }
  isLinkClicked(){
    this._searchResult=null;
    this.isSearchClicked.emit(true);
  }
  getRouterLink(object:any):string{
    return object.mediaType=='person'?'people/'+object.id:
    object.mediaType=='movie'?'movie/'+object.id:'series/'+object.id;
  }
  getImagePath(object:any):string{ 
    return object.mediaType=='person'?object.profilePath!=null?this._mainImagePath+object.profilePath:this._imageNullPath:
    object.mediaType=='movie'?object.posterPath!=null?this._mainImagePath+object.posterPath:this._imageNullPath:object.posterPath!=null?
    this._mainImagePath+object.posterPath:this._imageNullPath;
  }
  getName(object:any):string{
    return object.mediaType=='person'?object.name:
    object.mediaType=='movie'?object.title:object.name;
  }
  get searchResult():Array<any>{
    return this._searchResult;
  }
  get mainImagePath():string{
    return this._mainImagePath;
  }
  get imageNullPath():string{
    return this._imageNullPath;
  }
}
