export class Network{
    
    private _id:number;
    private _name:string;
    private _homepage:string;
    private _headquarters:string;
    private _originCountry:string;

    constructor(id:number,name:string,homepage:string,headquarters:string,originCountry:string){
        this._id=id;
        this._name=name;
        this._homepage=homepage;
        this._headquarters=headquarters;
        this._originCountry=originCountry;
    }
    get id():number{
        return this._id;
    }
    get name():string{
        return this._name;
    }
    get homepage():string{
        return this._homepage;
    }
    get headquarters():string{
        return this._headquarters;
    }
    get originCountry():string{
        return this._originCountry;
    }
}