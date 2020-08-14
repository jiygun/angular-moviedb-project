export class ResultSearch{
    private _page:number;
    private _searchResults:Array<any>;
    private _totalResult:number;
    private _totalPages:number;
    constructor(page:number,searchResults:Array<any>,totalResult:number,totalPages:number){
        this._page=page;
        this._searchResults=searchResults;
        this._totalResult=totalResult;
        this._totalPages=totalPages;
    }
    get page():number{
        return this._page;
    }
    get searchResults():Array<any>{
        return this._searchResults;
    }
    get totalResult():number{
        return this._totalResult;
    }
    get totalPages():number{
        return this._totalPages;
    }
}