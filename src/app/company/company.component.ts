import { Component, Input, OnInit } from '@angular/core';
import { ProductionCompany } from '../core/models/company/production.company';
import { Statics } from '../core/statics/statics';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  
  @Input() companies:Array<ProductionCompany>;

  private _mainImagePath:string;
  private _imageNullPath:string;

  constructor() { 
    this._mainImagePath=Statics.ImagePaths.mainImagePath;
    this._imageNullPath=Statics.ImagePaths.nullImagePath;
  }
  ngOnInit(): void {
  }
  get mainImagePath():string{
    return this._mainImagePath;
  }
  get imageNullPath():string{
    return this._imageNullPath;
  }
}
