import { ShowSummary } from '../shared/show.summary';

export class MovieSummary extends ShowSummary{
    
    private _adult:boolean;
    private _video:boolean;

    constructor(posterPath:string,popularity:number,id:number,backdropPath:string,voteAverage:number,overview:string,genreIds:Array<number>,
        originalLanguage:string,voteCount:number,title:string,originalTitle:string,adult:boolean,releaseDate:string,video:boolean){
            super(posterPath,popularity,id,backdropPath,voteAverage,overview,genreIds,originalLanguage,voteCount,title,originalTitle,releaseDate);
            this._adult=adult;
            this._video=video;
    }
    get adult():boolean{
        return this._adult;
    }
    get video():boolean{
        return this._video;
    }
}