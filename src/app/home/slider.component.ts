import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { SlideModel } from 'slider-angular';
import { Result } from '../core/models/result/result';
import { ShowSummary } from '../core/models/shared/show.summary';
import { MovieService } from '../core/services/movie.service';
import { SeriesService } from '../core/services/series.service';
import { Statics } from '../core/statics/statics';
import { Alert } from "../shared/alert.creator";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  host:{"(window:resize)":"onResize($event)"}
})
export class SliderComponent implements OnInit,AfterViewInit {

  @Input() showList:Array<SlideModel>;
  private movieIsActive:boolean;

  private _movieList:Array<ShowSummary>;
  private _seriesList:Array<ShowSummary>;

  private _movieSlideList:Array<SlideModel>;
  private _seriesSlideList:Array<SlideModel>;

  private _originalImagePath:string;
  private _imageNullPath:string;

  @ViewChild('slider') slider:ElementRef;
  @ViewChild('slides') slides:ElementRef;
  @ViewChild('switch') switch:ElementRef;

  objectList=[new SlideModel("https://www.webtasarimsistemleri.com/sayfalar/content/angularjs-big-size.png"),
  new SlideModel("https://miro.medium.com/max/3492/1*P7x-_0XfQz6CVmMY_QAv0w.png")];
  
  private _faHeart:IconDefinition;

  constructor(private movieService:MovieService,private seriesService:SeriesService,private router:Router,private componentFactoryResolver:ComponentFactoryResolver,private viewContainerRef:ViewContainerRef) { 
    this._faHeart=faHeart;
    this.movieIsActive=true;
    this._movieSlideList=new Array();
    this._seriesSlideList=new Array();
    this._originalImagePath=Statics.ImagePaths.originalImagePath;
    this._imageNullPath=Statics.ImagePaths.nullImagePath;
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.slides.nativeElement.children[0].style.width=this.slider.nativeElement.clientWidth+'px';
    this.slides.nativeElement.children[1].style.width=this.slider.nativeElement.clientWidth+'px';
    this.slides.nativeElement.style.transform=`translate3d(${this.slides.nativeElement.children[0].clientWidth/2}px, 0px, 0px)`;
    this.movieService.getPopularList().subscribe((popular:Result)=>{
      this._movieList=popular.showSummary;
      popular.showSummary.forEach((show:ShowSummary) => {
        this._movieSlideList.push(new SlideModel(show.backdropPath!=null?this._originalImagePath+show.backdropPath:this._imageNullPath,true,"bottom",true,show.title,null,"center",null));
      });
    },(error=>{
      new Alert(error,null,null,this.viewContainerRef,this.componentFactoryResolver);
    }));
    this.seriesService.getPopularList().subscribe((popular:Result)=>{
      this._seriesList=popular.showSummary;
      popular.showSummary.forEach((show:ShowSummary) => {
        this._seriesSlideList.push(new SlideModel(show.backdropPath!=null?this._originalImagePath+show.backdropPath:this._imageNullPath,true,"bottom",true,show.title,null,"center",null));
      });
    },(error=>{
      new Alert(error,null,null,this.viewContainerRef,this.componentFactoryResolver);
    }));
  }
  activeMovieSlide($event){
  }
  activeSeriesSlide($event){
  }
  clickedMovieSlide($event){
    this.router.navigate(['/movie',this._movieList[$event-1].id]);
  }
  clickedSeriesSlide($event){
    this.router.navigate(['/series',this._seriesList[$event-1].id]);
  }
  setSlider($event){
    this.slides.nativeElement.style.transition="transform 400ms ease 0s";
    if($event.target.classList.contains('movies')){
      this.slides.nativeElement.style.transform=`translate3d(${this.slides.nativeElement.children[0].clientWidth/2}px, 0px, 0px)`;
      this.movieIsActive=true,this.switch.nativeElement.classList.remove('active');
    }else{
      this.slides.nativeElement.style.transform=`translate3d(${-this.slides.nativeElement.children[0].clientWidth/2}px, 0px, 0px)`;
      this.movieIsActive=false,this.switch.nativeElement.classList.add('active');
    }
  }
  onResize($event){
    this.slides.nativeElement.children[0].style.width=this.slider.nativeElement.clientWidth+'px';
    this.slides.nativeElement.children[1].style.width=this.slider.nativeElement.clientWidth+'px';
    this.slides.nativeElement.style.transition="transform 0s ease 0s";
    this.movieIsActive?this.slides.nativeElement.style.transform=`translate3d(${this.slides.nativeElement.children[0].clientWidth/2}px, 0px, 0px)`:this.slides.nativeElement.style.transform=`translate3d(${-this.slides.nativeElement.children[0].clientWidth/2}px, 0px, 0px)`;
  }
  get faHeart():IconDefinition{
    return this._faHeart;
  }
  get movieSlideList():Array<SlideModel>{
    return this._movieSlideList;
  }
  get seriesSlideList():Array<SlideModel>{
    return this._seriesSlideList;
  }
}
