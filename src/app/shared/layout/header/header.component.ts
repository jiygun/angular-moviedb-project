import { Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faVideo, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host:{"(window:resize)":"onResize()","(window:click)":"onClick($event)"}
})
export class HeaderComponent implements OnInit {
  @ViewChild('menu') menu:ElementRef;
  @ViewChild('search') search:ElementRef;

  private _faVideo:Object;
  private _faBars:Object;
  private _faSearch:Object;

  private isToggle:boolean;
  private _isSearchOpen:boolean;

  private _inputText:string;

  private _setSearchVisibility:boolean;
  
  constructor() {
    this.isToggle=false;
    this._isSearchOpen=false;
    this._faVideo=faVideo;
    this._faBars=faBars;
    this._faSearch=faSearch;
    this._setSearchVisibility=true;
  }
  ngOnInit(): void {
  }
  openMenuList($event){
    $event.stopPropagation();
    this.isToggle?this.isToggle=false:this.isToggle=true;
    this.isToggle?this.menu.nativeElement.style.maxHeight=this.menu.nativeElement.scrollHeight+'px':this.menu.nativeElement.style.maxHeight=0;
  }
  openSearchBox($event){
    $event.stopPropagation();
    this._isSearchOpen?this._isSearchOpen=false:this._isSearchOpen=true;
    this._isSearchOpen?(this.search.nativeElement.classList.add('active'),this._setSearchVisibility=true):(this.search.nativeElement.classList.remove('active'),this._setSearchVisibility=false);
  }
  onClick($event){
    !$event.target.classList.contains("input")?$event.target.className!="search__form"?
    (this.search.nativeElement.classList.remove('active'),window.innerWidth>=991?this._setSearchVisibility=false:null,this._inputText="",this._isSearchOpen=false):null:null;
    $event.target.className!="navbar__top"?(this.menu.nativeElement.style.maxHeight=0,this.isToggle=false):null;
  }
  clearInput(isClicked:boolean){
    isClicked?this._inputText="":null;
  }
  onResize(){
    window.innerWidth>=991?(this.menu.nativeElement.style.transition="all 0s",this._setSearchVisibility=this._isSearchOpen):
    (this.menu.nativeElement.style.transition="all .45s",this.search.nativeElement.classList.remove('active'),this._isSearchOpen=false,this._setSearchVisibility=true);
  }
  get faVideo(){
    return this._faVideo;
  }
  get faBars(){
    return this._faBars;
  }
  get faSearch(){
    return this._faSearch;
  }
  set inputText(inputText:string){
    this._inputText=inputText;
  }
  get inputText():string{
    return this._inputText;
  }
  get setSearchVisibility():boolean{
    return this._setSearchVisibility;
  }
}
