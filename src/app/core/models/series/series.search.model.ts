export class SeriesSearchModel{
    private _posterPath:string;
    private _popularity:number;
    private _id:number;
    private _overview:string;
    private _backdropPath:string;
    private _voteAverage:number;
    private _mediaType:string;
    private _firstAirDate:string;
    private _originCountry:string;
    private _genreIds:Array<number>;
    private _originalLanguage:string;
    private _voteCount:number;
    private _name:string;
    private _originalName:string;
    constructor(posterPath:string,popularity:number,id:number,overview:string,backdropPath:string,voteAverage:number,
        mediaType:string,firstAirDate:string,originCountry:string,genreIds:Array<number>,originalLanguage:string,voteCount:number,
        name:string,originalName:string){
        this._posterPath=posterPath;
        this._popularity=popularity;
        this._id=id;
        this._overview=overview;
        this._backdropPath=backdropPath;
        this._voteAverage=voteAverage;
        this._mediaType=mediaType;
        this._firstAirDate=firstAirDate;
        this._originCountry=originCountry;
        this._genreIds=genreIds;
        this._originalLanguage=originalLanguage;
        this._voteCount=voteCount;
        this._name=name;
        this._originalName=originalName;
    }
    get posterPath():string{
        return this._posterPath;
    }
    get popularity():number{
        return this._popularity;
    }
    get id():number{
        return this._id;
    }
    get overview():string{
        return this._overview;
    }
    get backdropPath():string{
        return this._backdropPath;
    }
    get voteAverage():number{
        return this._voteAverage;
    }
    get mediaType():string{
        return this._mediaType;
    }
    get firstAirDate():string{
        return this._firstAirDate;
    }
    get originCountry():string{
        return this._originCountry;
    }
    get genreIds():Array<number>{
        return this._genreIds;
    }
    get originalLanguage():string{
        return this._originalLanguage;
    }
    get voteCount():number{
        return this._voteCount;
    }
    get name():string{
        return this._name;
    }
    get originalName():string{
        return this._originalName;
    }
}