export class ProductionCompany{
    private _name:string;
    private _id:number;
    private _logoPath:string;
    private _originCountry:string;

    constructor(name:string,id:number,logoPath:string,originCountry:string){
        this._name=name;
        this._id=id;
        this._logoPath=logoPath;
        this._originCountry=originCountry;
    }

    get name():string{
        return this._name;
    }
    get id():number{
        return this._id;
    }
    get logoPath():string{
        return this._logoPath;
    }
    get originCountry():string{
        return this._originCountry;
    }
}