export class MovieSearchModel{
    private _posterPath:string;
    private _adult:boolean;
    private _overview:string;
    private _releaseDate:string;
    private _originalTitle:string;
    private _genreIds:Array<number>;
    private _id:number;
    private _mediaType:string;
    private _originalLanguage:string;
    private _title:string;
    private _backdropPath:string;
    private _popularity:number;
    private _voteCount:number;
    private _video:boolean;
    private _voteAverage:number;
    constructor(posterPath:string,adult:boolean,overview:string,releaseDate:string,originalTitle:string,genreIds:Array<number>,
        id:number,mediaType:string,originalLanguage:string,title:string,backdropPath:string,popularity:number,voteCount:number,
        video:boolean,voteAverage:number){
        this._posterPath=posterPath;
        this._adult=adult;
        this._overview=overview;
        this._releaseDate=releaseDate;
        this._originalTitle=originalTitle;
        this._genreIds=genreIds;
        this._id=id;
        this._mediaType=mediaType;
        this._originalLanguage=originalLanguage;
        this._title=title;
        this._backdropPath=backdropPath;
        this._popularity=popularity;
        this._voteCount=voteCount;
        this._video=video;
        this._voteAverage=voteAverage;
    }
    get posterPath():string{
        return this._posterPath;
    }
    get adult():boolean{
        return this._adult;
    }
    get overview():string{
        return this._overview;
    }
    get releaseDate():string{
        return this._releaseDate;
    }
    get originalTitle():string{
        return this._originalTitle;
    }
    get genreIds():Array<number>{
        return this._genreIds;
    }
    get id():number{
        return this._id;
    }
    get mediaType():string{
        return this._mediaType;
    }
    get originalLanguage():string{
        return this._originalLanguage;
    }
    get title():string{
        return this._title;
    }
    get backdropPath():string{
        return this._backdropPath;
    }
    get popularity():number{
        return this._popularity;
    }
    get voteCount():number{
        return this._voteCount;
    }
    get video():boolean{
        return this._video;
    }
    get voteAverage():number{
        return this._voteAverage;
    }
}