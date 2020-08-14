import { Show } from '../shared/show';
import { Genres } from '../genres/genres';
import { ProductionCompany } from '../company/production.company';
import { ProductionCountry } from './production.country';
import { SpokenLanguage } from './spoken.language';

export class Movie extends Show{
    
    private _isAdult:boolean;
    private _belongsToCollection:Object;
    private _budget:number;
    private _imdbId:string;
    private _originalLanguage:string;
    private _productionCountries:Array<ProductionCountry>;
    private _releaseDate:string;
    private _revenue:number;
    private _runtime:number;
    private _spokenLanguages:Array<SpokenLanguage>;
    private _status:string;
    private _tagline:string;
    private _title:string;
    private _video:boolean;
    constructor(id?:number,name?:string,backgroundPath?:string,homepage?:string,genres?:Array<Genres>,overView?:string,popularity?:number,
        posterPath?:string,productionCompanies?:Array<ProductionCompany>,voteAverage?:number,voteCount?:number,isAdult?:boolean,
        belongsToCollection?:Object,budget?:number,imdbId?:string,originalLanguage?:string,productionCountries?:Array<ProductionCountry>,
        releaseDate?:string,revenue?:number,runtime?:number,spokenLanguages?:Array<SpokenLanguage>,status?:string,tagline?:string,
        title?:string,video?:boolean){
        super(id,name,backgroundPath,homepage,genres,overView,popularity,posterPath,productionCompanies,voteAverage,voteCount);
        this._isAdult=isAdult;
        this._belongsToCollection=belongsToCollection;
        this._budget=budget;
        this._imdbId=imdbId;
        this._originalLanguage=originalLanguage;
        this._productionCountries=productionCountries;
        this._releaseDate=releaseDate;
        this._revenue=revenue;
        this._runtime=runtime;
        this._spokenLanguages=spokenLanguages;
        this._status=status;
        this._tagline=tagline;
        this._title=title;
        this._video=video;
    }
    get isAdult():boolean{
        return this._isAdult;
    }
    get belongsToCollection():Object{
        return this._belongsToCollection;
    }
    get budget():number{
        return this._budget;
    }
    get imdbId():string{
        return this._imdbId;
    }
    get originalLanguage():string{
        return this._originalLanguage;
    }
    get productionCountries():Array<ProductionCountry>{
        return this._productionCountries;
    }
    get releaseDate():string{
        return this._releaseDate;
    }
    get revenue():number{
        return this._revenue;
    }
    get runtime():number{
        return this._runtime;
    }
    get spokenLanguages():Array<SpokenLanguage>{
        return this._spokenLanguages;
    }
    get status():string{
        return this._status;
    }
    get tagline():string{
        return this._tagline;
    }
    get title():string{
        return this._title;
    }
    get video():boolean{
        return this._video;
    }
}