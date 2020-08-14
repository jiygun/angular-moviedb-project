export class Creator{
    private _id:number;
    private _creditId:string;
    private _name:string;
    private _gender:number;
    private _profilePath:string;

    constructor(id:number,creditId:string,name:string,gender:number,profilePath:string){
        this._id=id;
        this._creditId=creditId;
        this._name=name;
        this._gender=gender;
        this._profilePath=profilePath;
    }

    get id():number{
        return this._id;
    }
    get creditId():string{
        return this._creditId;
    }
    get name():string{
        return this._name;
    }
    get gender():number{
        return this._gender;
    }
    get profilePath():string{
        return this._profilePath;
    }
}