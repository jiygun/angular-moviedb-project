import { ShowSummary } from '../shared/show.summary';

export class Result{
    private _page:number;
    private _showSummary:Array<ShowSummary>;
    private _totalResult:number;
    private _totalPages:number;
    constructor(page:number,showSummary:Array<ShowSummary>,totalResult:number,totalPages:number){
        this._page=page;
        this._showSummary=showSummary;
        this._totalResult=totalResult;
        this._totalPages=totalPages;
    }
    get page():number{
        return this._page;
    }
    get showSummary():Array<ShowSummary>{
        return this._showSummary;
    }
    get totalResult():number{
        return this._totalResult;
    }
    get totalPages():number{
        return this._totalPages;
    }
}