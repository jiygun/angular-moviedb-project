export class Genres{

    private _id:number;
    private _genre:string;
    constructor(id:number,genre:string){
        this._id=id;
        this._genre=genre;
    }
    get id():number{
        return this._id
    }
    get genre():string{
        return this._genre
    }
}