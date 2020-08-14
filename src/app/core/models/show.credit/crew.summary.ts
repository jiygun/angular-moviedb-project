export class CrewSummary{
    private _creditId:string;
    private _department:string;
    private _gender:number;
    private _id:number;
    private _job:string;
    private _name:string;
    private _profilePath:string;
    constructor(creditId?:string,department?:string,gender?:number,
        id?:number,job?:string,name?:string,profilePath?:string){
            this._creditId=creditId;
            this._department=department;
            this._gender=gender;
            this._id=id;
            this._job=job;
            this._name=name;
            this._profilePath=profilePath;
    }
    get creditId():string{
        return this._creditId;
    }
    get department():string{
        return this._department;
    }
    get gender():number{
        return this._gender;
    }
    get id():number{
        return this._id;
    }
    get job():string{
        return this._job;
    }
    get name():string{
        return this._name;
    }
    get profilePath():string{
        return this._profilePath;
    }
}