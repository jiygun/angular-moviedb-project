import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonListModel } from '../core/models/person/person.list.model';
import { ResultPerson } from '../core/models/result/result.person';
import { PersonService } from '../core/services/person.service';
import { Statics } from '../core/statics/statics';
import { Alert } from '../shared/alert.creator';

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.scss']
})
export class PersonListComponent implements OnInit {

  private _imageNullPath:string;
  private _mainImagePath:string;

  private _personList:Array<PersonListModel>;

  private _totalPages:number;
  private pageNumber:number;

  constructor(private personService:PersonService,private router:Router,private activatedRoute:ActivatedRoute,private componentFactoryResolver:ComponentFactoryResolver,private viewContainerRef:ViewContainerRef) { 
    this._personList=new Array();
    this.pageNumber=1;
    this._mainImagePath=Statics.ImagePaths.mainImagePath;
    this._imageNullPath=Statics.ImagePaths.nullImagePath;
  }
  ngOnInit(): void {
    this.setShowLit();
  }
  private setShowLit(){
    this.activatedRoute.queryParamMap.subscribe((result:any)=>{
      result.params.page!=undefined?this.pageNumber=parseInt(result.params.page):null;
      this.personService.getPeopleListWithPageNumber(this.pageNumber).subscribe((result:ResultPerson)=>{
        this._personList=result.personList;
        this._totalPages=result.totalPages;
      },
      (error=>{
        new Alert(error,null,null,this.viewContainerRef,this.componentFactoryResolver);
      }));
    });
  }
  get personList():Array<PersonListModel>{
    return this._personList;
  }
  get totalPages():number{
    return this._totalPages;
  }
  get mainImagePath():string{
    return this._mainImagePath;
  }
  get imageNullPath():string{
    return this._imageNullPath;
  }
  activePage($event){
    this.pageNumber=$event;
    this.router.navigate([`/${Statics.UrlPaths.personPath}`],{queryParams:{page:this.pageNumber}});
  }
}
