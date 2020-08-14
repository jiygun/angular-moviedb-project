import { PersonListModel } from "../person/person.list.model";

export class ResultPerson{
    private _page:number;
    private _personList:Array<PersonListModel>;
    private _totalResult:number;
    private _totalPages:number;
    constructor(page:number,personList:Array<PersonListModel>,totalResult:number,totalPages:number){
        this._page=page;
        this._personList=personList;
        this._totalResult=totalResult;
        this._totalPages=totalPages;
    }
    get page():number{
        return this._page;
    }
    get personList():Array<PersonListModel>{
        return this._personList;
    }
    get totalResult():number{
        return this._totalResult;
    }
    get totalPages():number{
        return this._totalPages;
    }
}