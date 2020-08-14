export class CastSummary{
    private _castId:number;
    private _character:string;
    private _characterId:number;
    private _gender:number;
    private _id:number;
    private _name:string;
    private _order:string;
    private _profilePath:string;
    constructor(castId?:number,character?:string,characterId?:number,gender?:number,
        id?:number,name?:string,order?:string,profilePath?:string){
            this._castId=castId;
            this._character=character;
            this._characterId=characterId;
            this._gender=gender;
            this._id=id;
            this._name=name;
            this._order=order;
            this._profilePath=profilePath;
    }
    get castId():number{
        return this._castId;
    }
    get character():string{
        return this._character;
    }
    get characterId():number{
        return this._characterId;
    }
    get gender():number{
        return this._gender;
    }
    get id():number{
        return this._id;
    }
    get name():string{
        return this._name;
    }
    get order():string{
        return this._order;
    }
    get profilePath():string{
        return this._profilePath;
    }
}