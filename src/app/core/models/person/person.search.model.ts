export class PersonSearchModel{
    private _profilePath:string;
    private _adult:boolean;
    private _id:number;
    private _mediaType:string;
    private _knownFor:Array<Object>;
    private _name:string;
    private _popularity:number;

    constructor(profilePath:string,adult:boolean,id:number,mediaType:string,knownFor:Array<Object>,name:string,popularity:number){
        this._id=id;
        this._name=name;
        this._knownFor=knownFor;
        this._popularity=popularity;
        this._profilePath=profilePath;
        this._mediaType=mediaType;
        this._adult=adult;
    }
    get id():number{
        return this._id;
    }
    get name():string{
        return this._name;
    }
    get knownFor():Array<object>{
        return this._knownFor;
    }
    get popularity():number{
        return this._popularity;
    }
    get profilePath():string{
        return this._profilePath;
    }
    get mediaType():string{
        return this._mediaType;
    }
    get adult():boolean{
        return this._adult;
    }
}