export class SeriesCast{
    private _creditId:string;
    private _originalName:string;
    private _id:number;
    private _genreIds:Array<number>;
    private _character:string;
    private _name:string;
    private _posterPath:string;
    private _voteCount:number;
    private _voteAverage:number;
    private _popularity:number;
    private _episodeCount:number;
    private _originalLanguage:string;
    private _firstAirDate:string;
    private _backdropPath:string;
    private _overView:string;
    private _originCountry:Array<string>;


    constructor(creditId?:string,originalName?:string,id?:number,genreIds?:Array<number>,
        character?:string,name?:string,posterPath?:string,voteCount?:number,voteAverage?:number,
        popularity?:number,episodeCount?:number,originalLanguage?:string,firstAirDate?:string,
        backdropPath?:string,overView?:string,originCountry?:Array<string>){
            this._character=character;
            this._creditId=creditId;
            this._firstAirDate=firstAirDate;
            this._voteCount=voteCount;
            this._originalName=originalName;
            this._name=name;
            this._voteAverage=voteAverage;
            this._episodeCount=episodeCount;
            this._genreIds=genreIds;
            this._originalLanguage=originalLanguage;
            this._originCountry=originCountry;
            this._popularity=popularity;
            this._id=id;
            this._backdropPath=backdropPath;
            this._overView=overView;
            this._posterPath=posterPath;
    }
    get character():string{
        return this._character;
    }
    get creditId():string{
        return this._creditId;
    }
    get firstAirDate():string{
        return this._firstAirDate;
    }
    get voteCount():number{
        return this._voteCount;
    }
    get originalName():string{
        return this._originalName;
    }
    get name():string{
        return this._name;
    }
    get voteAverage():number{
        return this._voteAverage;
    }
    get episodeCount():number{
        return this._episodeCount;
    }
    get genreIds():Array<number>{
        return this._genreIds;
    }
    get originalLanguage():string{
        return this._originalLanguage;
    }
    get originCountry():Array<string>{
        return this._originCountry;
    }
    get popularity():number{
        return this._popularity;
    }
    get id():number{
        return this._id;
    }
    get backdropPath():string{
        return this._backdropPath;
    }
    get overView():string{
        return this._overView;
    }
    get posterPath():string{
        return this._posterPath;
    }
}