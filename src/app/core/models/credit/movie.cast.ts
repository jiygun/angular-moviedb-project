export class MovieCast{
    private _character:string;
    private _creditId:string;
    private _releaseDate:string;
    private _voteCount:number;
    private _video:boolean;
    private _adult:boolean;
    private _voteAverage:number;
    private _title:string;
    private _genreIds:Array<number>;
    private _originalLanguage:string;
    private _originalTitle:string;
    private _popularity:number;
    private _id:number;
    private _backdropPath:string;
    private _overView:string;
    private _posterPath:string;

    constructor(character?:string,creditId?:string,releaseDate?:string,voteCount?:number,
        video?:boolean,adult?:boolean,voteAverage?:number,title?:string,genreIds?:Array<number>,
        originalLanguage?:string,originalTitle?:string,popularity?:number,id?:number,backdropPath?:string,overView?:string,posterPath?:string){
            this._character=character;
            this._creditId=creditId;
            this._releaseDate=releaseDate;
            this._voteCount=voteCount;
            this._video=video;
            this._adult=adult;
            this._voteAverage=voteAverage;
            this._title=title;
            this._genreIds=genreIds;
            this._originalLanguage=originalLanguage;
            this._originalTitle=originalTitle;
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
    get releaseDate():string{
        return this._releaseDate;
    }
    get voteCount():number{
        return this._voteCount;
    }
    get video():boolean{
        return this._video;
    }
    get adult():boolean{
        return this._adult;
    }
    get voteAverage():number{
        return this._voteAverage;
    }
    get title():string{
        return this._title;
    }
    get genreIds():Array<number>{
        return this._genreIds;
    }
    get originalLanguage():string{
        return this._originalLanguage;
    }
    get originalTitle():string{
        return this._originalTitle;
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