export class ShowSummary{

    private _posterPath:string;
    private _popularity:number;
    private _id:number;
    private _backdropPath:string;
    private _voteAverage:number;
    private _overview:string;
    private _genreIds:Array<number>;
    private _originalLanguage:string;
    private _voteCount:number;
    private _originalTitle:string;
    private _title:string;
    private _releaseDate:string

    constructor(posterPath:string,popularity:number,id:number,backdropPath:string,voteAverage:number,overview:string,
        genreIds:Array<number>,originalLanguage:string,voteCount:number,title:string,originalTitle:string,releaseDate:string){
            this._posterPath=posterPath;
            this._popularity=popularity;
            this._id=id;
            this._backdropPath=backdropPath;
            this._voteAverage=voteAverage;
            this._overview=overview;
            this._genreIds=genreIds;
            this._originalLanguage=originalLanguage;
            this._voteCount=voteCount;
            this._originalTitle=originalTitle;
            this._title=title;
            this._releaseDate=releaseDate;
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
    get backdropPath():string{
        return this._backdropPath;
    }
    get voteAverage():number{
        return this._voteAverage;
    }
    get overview():string{
        return this._overview;
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
    get originalTitle():string{
        return this._originalTitle;
    }
    get title():string{
        return this._title;
    }
    get releaseDate():string{
        return this._releaseDate;
    }
}