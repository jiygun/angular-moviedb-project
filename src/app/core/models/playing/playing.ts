import { ShowSummary } from '../shared/show.summary';
import { Date } from '../shared/dates';

export class Playing{
    private _page:number;
    private _onPlaying:Array<ShowSummary>;
    private _date:Date;
    private _totalResult:number;
    private _totalPages:number;
    constructor(page:number,onPlaying:Array<ShowSummary>,date:Date,totalResult:number,totalPages:number){
        this._page=page;
        this._onPlaying=onPlaying;
        this._date=date;
        this._totalResult=totalResult;
        this._totalPages=totalPages;
    }
    get page():number{
        return this._page;
    }
    get onPlaying():Array<ShowSummary>{
        return this._onPlaying;
    }
    get date():Date{
        return this._date;
    }
    get totalResult():number{
        return this._totalResult;
    }
    get totalPages():number{
        return this._totalPages;
    }
}