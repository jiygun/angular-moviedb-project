import { CastSummary } from "./cast.summary";
import { CrewSummary } from "./crew.summary";

export class ShowCredit{
    private _id:number;
    private _casts:Array<CastSummary>;
    private _crews:Array<CrewSummary>;
    constructor(id?:number,casts?:Array<CastSummary>,crews?:Array<CrewSummary>){
        this._id=id;
        this._casts=casts;
        this._crews=crews;
    }
    get id():number{
        return this._id;
    }
    get casts():Array<CastSummary>{
        return this._casts;
    }
    get crews():Array<CrewSummary>{
        return this._crews;
    }
}