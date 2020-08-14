export class ProductionCountry{
    private _name:string;
    private _id:string;

    constructor(name:string,id:string){
        this._name=name;
        this._id=id;
    }

    get name():string{
        return this._name;
    }
    get id():string{
        return this._id;
    }
}