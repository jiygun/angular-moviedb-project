import { SeriesCrew } from "./series.crew";
import { SeriesCast } from "./series.cast";

export class SeriesCredit{
    private _id:number;
    private _casts:Array<SeriesCast>;
    private _crews:Array<SeriesCrew>;
    constructor(id?:number,casts?:Array<SeriesCast>,crews?:Array<SeriesCrew>){
        this._id=id;
        this._casts=casts;
        this._crews=crews;
    }
    get id():number{
        return this._id;
    }
    get casts():Array<SeriesCast>{
        return this._casts;
    }
    get crews():Array<SeriesCrew>{
        return this._crews;
    }
}