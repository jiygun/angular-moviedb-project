import { MovieCast } from "./movie.cast";
import { MovieCrew } from "./movie.crew";

export class MovieCredit{
    private _id:number;
    private _casts:Array<MovieCast>;
    private _crews:Array<MovieCrew>;
    constructor(id?:number,casts?:Array<MovieCast>,crews?:Array<MovieCrew>){
        this._id=id;
        this._casts=casts;
        this._crews=crews;
    }
    get id():number{
        return this._id;
    }
    get casts():Array<MovieCast>{
        return this._casts;
    }
    get crews():Array<MovieCrew>{
        return this._crews;
    }
}