export class Date{
    private _minimum:string;
    private _maximum:string;
    constructor(minimum:string,maximum:string){
        this._minimum=minimum;
        this._maximum=maximum;
    }
    get minimum():string{
        return this._minimum;
    }
    get maximum():string{
        return this._maximum
    }
}