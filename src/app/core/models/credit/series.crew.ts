export class SeriesCrew{
    private _id:number;
    private _department:string;
    private _originalLanguage:string;
    private _episodeCount:number;
    private _job:string;
    private _overview:string;
    private _originCountry:Array<string>;
    private _originalName:string;
    private _genreIds:Array<number>;
    private _name:string;
    private _firstAirDate:string;
    private _backdropPath:string;
    private _popularity:number;
    private _voteCount:number;
    private _voteAverage:number;
    private _posterPath:string;
    private _creditId:string;
    constructor(id?:number,department?:string,originalLanguage?:string,episodeCount?:number,
        job?:string,overview?:string,originCountry?:Array<string>,originalName?:string,genreIds?:Array<number>,
        name?:string,firstAirDate?:string,backdropPath?:string,popularity?:number,
        voteCount?:number,voteAverage?:number,posterPath?:string,creditId?:string){
            this._id=id;
            this._department=department;
            this._originalLanguage=originalLanguage;
            this._episodeCount=episodeCount;
            this._job=job;
            this._overview=overview;
            this._voteCount=voteCount;
            this._originCountry=originCountry;
            this._posterPath=posterPath;
            this._backdropPath=backdropPath;
            this._originalName=originalName;
            this._popularity=popularity;
            this._genreIds=genreIds;
            this._voteAverage=voteAverage;
            this._name=name;
            this._firstAirDate=firstAirDate;
            this._creditId=creditId;
    }
    get id():number{
        return this._id;
    }
    get department():string{
        return this._department;
    }
    get originalLanguage():string{
        return this._originalLanguage;
    }
    get episodeCount():number{
        return this._episodeCount;
    }
    get job():string{
        return this._job;
    }
    get overview():string{
        return this._overview;
    }
    get voteCount():number{
        return this._voteCount;
    }
    get originCountry():Array<string>{
        return this._originCountry;
    }
    get posterPath():string{
        return this._posterPath;
    }
    get backdropPath():string{
        return this._backdropPath;
    }
    get originalName():string{
        return this._originalName;
    }
    get popularity():number{
        return this._popularity;
    }
    get genreIds():Array<number>{
        return this._genreIds;
    }
    get voteAverage():number{
        return this._voteAverage;
    }
    get name():string{
        return this._name;
    }
    get firstAirDate():string{
        return this._firstAirDate;
    }
    get creditId():string{
        return this._creditId;
    }
}