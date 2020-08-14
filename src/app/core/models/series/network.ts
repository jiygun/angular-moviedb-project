export class Network{
    private _id:number;
    private _name:string;
    private _logoPath:string;
    private _originCountry:string;
    constructor(id:number,name:string,logoPath:string,originCountry:string){
        this._id=id;
        this._name=name;
        this._logoPath=logoPath;
        this._originCountry=originCountry;
    }
    get id():number{
        return this._id;
    }
    get name():string{
        return this._name;
    }
    get logoPath():string{
        return this._logoPath;
    }
    get originCountry():string{
        return this._originCountry;
    }
}