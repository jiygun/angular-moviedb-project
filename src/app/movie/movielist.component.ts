import { Component, ComponentFactoryResolver, DoCheck, Input, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genres } from '../core/models/genres/genres';
import { Result } from '../core/models/result/result';
import { ShowSummary } from '../core/models/shared/show.summary';
import { GenresService } from '../core/services/genres.service';
import { MovieService } from '../core/services/movie.service';
import { Statics } from '../core/statics/statics';
import { Alert } from '../shared/alert.creator';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovieListComponent implements OnInit,DoCheck {

  private _showList:Array<ShowSummary>;

  private _backgroundImage:string;
  private _filterQuery:string;
  private _tempFilterQuery:string;
  private _categoryFilters:Array<Genres>;
  private _categoryfilterLength:number;

  private _totalPages:number;
  private pageNumber:number;

  private _originalImagePath:string;

  private _genresList:Array<Genres>;

  @Input() categoryFilters:Array<Genres>;

  constructor(private movieService:MovieService,private genresService:GenresService,private router:Router,private activatedRoute:ActivatedRoute,private componentFactoryResolver:ComponentFactoryResolver,private viewContainerRef:ViewContainerRef) { 
    this._showList=new Array();
    this.pageNumber=1;
    this._categoryfilterLength=0;
    this._tempFilterQuery=this._filterQuery;
    this._originalImagePath=Statics.ImagePaths.originalImagePath;
  }
  ngOnInit(): void {
    this.setShowLit();
    this.setGenresList();
  }
  ngDoCheck(): void {
    if(this._categoryFilters!=undefined){
      if(this._categoryfilterLength!=this._categoryFilters.length){
        this.ngOnInit();
        this._categoryfilterLength=this._categoryFilters.length;
      }
    }
    if(this._filterQuery!=undefined){
      if(this._filterQuery!=this._tempFilterQuery){
        this._tempFilterQuery=this._filterQuery;
        this.ngOnInit();
      }
    }
  }
  private setShowLit(){
    this.activatedRoute.queryParamMap.subscribe((result:any)=>{
      result.params.page!=undefined?this.pageNumber=parseInt(result.params.page):null;
      this.movieService.getMovieListWithFilters(this.pageNumber,this.getCategoryQuery(),this._filterQuery).subscribe((result:Result)=>{
        if(result.totalPages!=0){
          this._showList=result.showSummary;
          this._totalPages=result.totalPages;
          this.router.navigate(['/movie'],{queryParams:{page:this.pageNumber>result.totalPages?result.totalPages:this.pageNumber}});
        }else{
          this._showList=new Array();
          this._totalPages=result.totalPages;
          new Alert(null,null,"Please Select A Different Category..",this.viewContainerRef,this.componentFactoryResolver);
        }
      },
      ((error:number)=>{
        new Alert(error,null,null,this.viewContainerRef,this.componentFactoryResolver);
      }));
    });
  }
  private setGenresList(){
    this.genresService.getMovieGenres().subscribe((genres:Array<Genres>)=>{
      this._genresList=genres;
    },
    (error=>{
      new Alert(error,null,null,this.viewContainerRef,this.componentFactoryResolver);
    }));
  }
  private getCategoryQuery():string{
    let categoryQuery:string="";
    this._categoryFilters!=undefined?this._categoryFilters.forEach((element:Genres) => {
      categoryQuery+=(element.id).toString()+',';
    }):null;
    return categoryQuery;
  }
  getCategoryFilters(categoryFilters:Array<Genres>){
    this._categoryFilters=categoryFilters;
  }
  getFilterQuery($event){
    this._filterQuery=$event;
  }
  hoveredShow(show:ShowSummary){
    this._backgroundImage=`${show.posterPath!=null?`url('${this._originalImagePath+show.posterPath}')`:null}`;
  }
  get showList():Array<ShowSummary>{
    return this._showList;
  }
  get totalPages():number{
    return this._totalPages;
  }
  get genresList():Array<Genres>{
    return this._genresList;
  }
  get backgroundImage():string{
    return this._backgroundImage;
  }
  activePage($event){
    this.pageNumber=$event;
    this.router.navigate([`/${Statics.UrlPaths.moviePath}`],{queryParams:{page:this.pageNumber}});
  }
}
