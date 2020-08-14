import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { faChevronDown, faChevronRight, faFilter, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Genres } from '../core/models/genres/genres';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit,AfterViewInit {

  private _faChevronRight:IconDefinition;
  private _faChevronDown:IconDefinition;
  private _faFilter:IconDefinition;

  private selectedFilters:Array<Genres>;

  private isMenuOpen:boolean;

  @ViewChild('menu') menu:ElementRef;

  @Input() categories:Array<Genres>;
  @Output() filterList:EventEmitter<Array<Genres>>;
  
  constructor(private cdr: ChangeDetectorRef) { 
    this.selectedFilters=new Array();
    this.filterList=new EventEmitter();
  }
  ngOnInit(): void {
    this._faFilter=faFilter;
    this._faChevronRight=faChevronRight;
    this._faChevronDown=faChevronDown;
  }
  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }
  checkIsActive(category:Genres):boolean{
    return this.selectedFilters.some(({id})=>id===category.id)?true:false;
  }
  clickedCategory(clickedCategory:Genres){
    this.selectedFilters.some(({id}) => id === clickedCategory.id)?this.selectedFilters.splice(this.selectedFilters.findIndex(r=>r.id==clickedCategory.id),1):this.selectedFilters.push(clickedCategory);
    this.filterList.emit(this.selectedFilters);
  }
  openList(){
    this.isMenuOpen?(this.isMenuOpen=false):this.isMenuOpen=true;
    this.isMenuOpen?this.menu.nativeElement.style.display="flex":this.menu.nativeElement.style.display="none";
  }
  get faChevronRight():IconDefinition{
    return this._faChevronRight;
  }
  get faChevronDown():IconDefinition{
    return this._faChevronDown;
  }
  get faFilter():IconDefinition{
    return this._faFilter;
  }
}
