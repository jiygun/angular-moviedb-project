export class Person{
    private _birthday:string;
    private _knownForDepartment:string;
    private _deathDay:string;
    private _id:number;
    private _name:string;
    private _alsoKnownAs:Array<string>;
    private _gender:number;
    private _biography:string;
    private _popularity:number;
    private _placeOfBirth:string;
    private _profilePath:string;
    private _adult:boolean;
    private _imdbId:string;
    private _homepage:string;
    constructor(birthday?:string,knownForDepartment?:string,deathDay?:string,id?:number,name?:string,
        alsoKnownAs?:Array<string>,gender?:number,biography?:string,popularity?:number,placeOfBirth?:string,
        profilePath?:string,adult?:boolean,imdbId?:string,homepage?:string){
        this._birthday=birthday;
        this._knownForDepartment=knownForDepartment;
        this._deathDay=deathDay;
        this._id=id;
        this._name=name;
        this._alsoKnownAs=alsoKnownAs;
        this._gender=gender;
        this._biography=biography;
        this._popularity=popularity;
        this._placeOfBirth=placeOfBirth;
        this._profilePath=profilePath;
        this._adult=adult;
        this._imdbId=imdbId;
        this._homepage=homepage;
    }
    get birthday():string{
        return this._birthday;
    }
    get knownForDepartment():string{
        return this._knownForDepartment;
    }
    get deathDay():string{
        return this._deathDay;
    }
    get id():number{
        return this._id;
    }
    get name():string{
        return this._name;
    }
    get alsoKnownAs():Array<string>{
        return this._alsoKnownAs;
    }
    get gender():number{
        return this._gender;
    }
    get biography():string{
        return this._biography;
    }
    get popularity():number{
        return this._popularity;
    }
    get placeOfBirth():string{
        return this._placeOfBirth;
    }
    get profilePath():string{
        return this._profilePath;
    }
    get adult():boolean{
        return this._adult;
    }
    get imdbId():string{
        return this._imdbId;
    }
    get homepage():string{
        return this._homepage;
    }
}