import { Genres } from '../genres/genres';
import { ProductionCompany } from '../company/production.company';

export class Show{
    
    private _id:number;
    private _name:string;
    private _backgroundPath:string;
    private _homepage:string;
    private _genres:Array<Genres>;
    private _overview:string;
    private _popularity:number;
    private _posterPath:string;
    private _productionCompanies:Array<ProductionCompany>;
    private _voteAverage:number;
    private _voteCount:number;
    
    constructor(id:number,name:string,backgroundPath:string,homepage:string,genres:Array<Genres>,overView:string,popularity:number,
        posterPath:string,productionCompanies:Array<ProductionCompany>,voteAverage:number,voteCount:number){
        this._id=id;
        this._name=name;
        this._backgroundPath=backgroundPath;
        this._homepage=homepage;
        this._genres=genres;
        this._overview=overView;
        this._popularity=popularity;
        this._posterPath=posterPath;
        this._productionCompanies=productionCompanies;
        this._voteAverage=voteAverage;
        this._voteCount=voteCount;
    }
    get id():number{
        return this._id;
    }
    get name():string{
        return this._name;
    }
    get backgroundPath():string{
        return this._backgroundPath;
    }
    get homepage():string{
        return this._homepage;
    }
    get genres():Array<Genres>{
        return this._genres;
    }
    get overView():string{
        return this._overview;
    }
    get popularity():number{
        return this._popularity;
    }
    get posterPath():string{
        return this._posterPath;
    }
    get productionCompanies():Array<ProductionCompany>{
        return this._productionCompanies;
    }
    get voteAverage():number{
        return this._voteAverage;
    }
    get voteCount():number{
        return this._voteCount;
    }
}