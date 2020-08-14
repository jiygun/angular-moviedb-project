export class Episode{

    private _id:number;
    private _name:string;
    private _airDate:string;
    private _episodeNumber:number;
    private _overView:string;
    private _productionName:string;
    private _seasonNumber:number;
    private _showId:number;
    private _stillPath:string;
    private _voteAvarage:number;
    private _voteCount:number;
    
    constructor(id:number,name:string,airDate:string,episodeNumber:number,overView:string,productionName:string,seasonNumber:number,showId:number,stillPath:string,voteAvarage:number,voteCount:number){
        this._id=id;
        this._name=name;
        this._airDate=airDate;
        this._episodeNumber=episodeNumber;
        this._overView=overView;
        this._productionName=productionName;
        this._seasonNumber=seasonNumber;
        this._showId=showId;
        this._stillPath=stillPath;
        this._voteAvarage=voteAvarage;
        this._voteCount=voteCount;
    }
    get id():number{
        return this._id;
    }
    get name():string{
        return this._name;
    }
    get airDate():string{
        return this._airDate;
    }
    get episodeNumber():number{
        return this._episodeNumber;
    }
    get overView():string{
        return this._overView;
    }
    get productionName():string{
        return this._productionName;
    }
    get seasonNumber():number{
        return this._seasonNumber;
    }
    get showId():number{
        return this._showId;
    }
    get stillPath():string{
        return this._stillPath;
    }
    get voteAvarage():number{
        return this._voteAvarage;
    }
    get voteCount():number{
        return this._voteCount;
    }
}