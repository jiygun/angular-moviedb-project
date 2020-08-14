export class Season{
    
    private _airDate:string;
    private _episodeCount:number;
    private _id:number;
    private _name:string;
    private _overview:string;
    private _posterPath:string;
    private _seasonNumber:number;

    constructor(airDate:string,episodeCount:number,id:number,name:string,overView:string,posterPath:string,seasonNumber:number){
        this._airDate=airDate;
        this._episodeCount=episodeCount;
        this._id=id;
        this._name=name;
        this._overview=overView;
        this._posterPath=posterPath;
        this._seasonNumber=seasonNumber;
    }
    get airDate():string{
        return this._airDate;
    }
    get episodeCount():number{
        return this._episodeCount;
    }
    get id():number{
        return this._id;
    }
    get name():string{
        return this._name;
    }
    get overView():string{
        return this._overview;
    }
    get posterPath():string{
        return this._posterPath;
    }
    get seasonNumber():number{
        return this._seasonNumber;
    }
}