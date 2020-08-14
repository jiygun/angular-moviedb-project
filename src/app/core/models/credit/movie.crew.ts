export class MovieCrew{
    private _id:number;
    private _department:string;
    private _originalLanguage:string;
    private _originalTitle:string;
    private _job:string;
    private _overview:string;
    private _voteCount:number;
    private _video:boolean;
    private _posterPath:string;
    private _backdropPath:string;
    private _title:string;
    private _popularity:number;
    private _genreIds:Array<number>;
    private _voteAverage:number;
    private _adult:boolean;
    private _releaseDate:string;
    private _creditId:string;

    constructor(id?:number,department?:string,originalLanguage?:string,originalTitle?:string,
        job?:string,overview?:string,voteCount?:number,video?:boolean,posterPath?:string,
        backdropPath?:string,title?:string,popularity?:number,genreIds?:Array<number>,voteAverage?:number,
        adult?:boolean,releaseDate?:string,creditId?:string){
            this._id=id;
            this._department=department;
            this._originalLanguage=originalLanguage;
            this._originalTitle=originalTitle;
            this._job=job;
            this._overview=overview;
            this._voteCount=voteCount;
            this._video=video;
            this._posterPath=posterPath;
            this._backdropPath=backdropPath;
            this._title=title;
            this._popularity=popularity;
            this._genreIds=genreIds;
            this._voteAverage=voteAverage;
            this._adult=adult;
            this._releaseDate=releaseDate;
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
    get originalTitle():string{
        return this._originalTitle;
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
    get video():boolean{
        return this._video;
    }
    get posterPath():string{
        return this._posterPath;
    }
    get backdropPath():string{
        return this._backdropPath;
    }
    get title():string{
        return this._title;
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
    get adult():boolean{
        return this._adult;
    }
    get releaseDate():string{
        return this._releaseDate;
    }
    get creditId():string{
        return this._creditId;
    }
}