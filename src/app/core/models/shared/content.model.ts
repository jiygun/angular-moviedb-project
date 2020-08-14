export class ContentModel{
    private _id:number;
    private _name:string;
    private _imagePath:string;
    private _optionalName:string;
    constructor(id?:number,name?:string,imagePath?:string,optionalName?:string){
        this._id=id;
        this._name=name;
        this._imagePath=imagePath;
        this._optionalName=optionalName;
    }
    get id():number{
        return this._id;
    }
    get name():string{
        return this._name;
    }
    get imagePath():string{
        return this._imagePath;
    }
    get optionalName():string{
        return this._optionalName;
    }
}