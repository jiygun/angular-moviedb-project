export class Filter{
    private _filterQuery:string;
    private _filterName:string;
    constructor(filterName:string,filterQuery:string){
        this._filterName=filterName;
        this._filterQuery=filterQuery;
    }
    get filterName():string{
        return this._filterName;
    }
    
    get filterQuery():string{
        return this._filterQuery;
    }
}