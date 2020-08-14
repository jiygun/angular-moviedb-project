import { ShowSummary } from '../shared/show.summary';

export class SeriesSummary extends ShowSummary{
    private _originCountry:Array<string>;

    constructor(posterPath:string,popularity:number,id:number,backdropPath:string,voteAverage:number,overview:string,genreIds:Array<number>,
        originalLanguage:string,voteCount:number,title:string,originalTitle:string,releaseDate:string,originCountry:Array<string>){
            super(posterPath,popularity,id,backdropPath,voteAverage,overview,genreIds,originalLanguage,voteCount,title,originalTitle,releaseDate);
            this._originCountry=originCountry;
    }
    get originCountry():Array<string>{
        return this._originCountry;
    }
}