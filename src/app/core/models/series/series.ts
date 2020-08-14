import { Show } from '../shared/show';
import { Creator } from './creator';
import { Genres } from '../genres/genres';
import { Network } from './network';
import { ProductionCompany } from '../company/production.company';
import { Season } from './season';
import { Episode } from './episode';

export class Series extends Show{
    
    private _creators:Array<Creator>;
    private _episodeRunTime:Array<number>;
    private _firstAirDate:string;
    private _inProduction:boolean;
    private _languages:Array<string>;
    private _lastAirDate:string;
    private _lastEpisodeToAir:Episode;
    private _nextEpisodeToAir:Episode;
    private _networks:Array<Network>;
    private _numberOfEpisodes:number;
    private _numberOfSeasons:number;
    private _originCountry:Array<string>;
    private _originalLanguage:string;
    private _originalName:string;
    private _seasons:Array<Season>;
    private _status:string;
    private _type:string;

    constructor(id?:number,name?:string,backgroundPath?:string,homepage?:string,genres?:Array<Genres>,overView?:string,popularity?:number,
        posterPath?:string,productionCompanies?:Array<ProductionCompany>,voteAvarage?:number,voteCount?:number,creators?:Array<Creator>,
        episodeRunTime?:Array<number>,firstAirDate?:string,inProduction?:boolean,languages?:Array<string>,lastAirDate?:string,lastEpisodeToAir?:Episode,
        nextEpisodeToAir?:Episode,networks?:Array<Network>,numberOfEpisodes?:number,numberOfSeasons?:number,originCountry?:Array<string>,
        originalLanguage?:string,originalName?:string,seasons?:Array<Season>,status?:string,type?:string){
        super(id,name,backgroundPath,homepage,genres,overView,popularity,posterPath,productionCompanies,voteAvarage,voteCount);
        this._creators=creators;
        this._episodeRunTime=episodeRunTime;
        this._firstAirDate=firstAirDate;
        this._inProduction=inProduction;
        this._languages=languages;
        this._lastAirDate=lastAirDate;
        this._lastEpisodeToAir=lastEpisodeToAir;
        this._nextEpisodeToAir=nextEpisodeToAir;
        this._networks=networks;
        this._numberOfEpisodes=numberOfEpisodes;
        this._numberOfSeasons=numberOfSeasons;
        this._originCountry=originCountry;
        this._originalLanguage=originalLanguage;
        this._originalName=originalName;
        this._seasons=seasons;
        this._status=status;
        this._type=type;
    }
    get creators():Array<Creator>{
        return this._creators;
    }
    get episodeRunTime():Array<number>{
        return this._episodeRunTime;
    }
    get firstAirDate():string{
        return this._firstAirDate;
    }
    get inProduction():boolean{
        return this._inProduction;
    }
    get languages():Array<string>{
        return this._languages;
    }
    get lastAirDate():string{
        return this._lastAirDate;
    }
    get lastEpisodeToAir():Episode{
        return this._lastEpisodeToAir;
    }
    get nextEpisodeToAir():Episode{
        return this._nextEpisodeToAir;
    }
    get networks():Array<Network>{
        return this._networks;
    }
    get numberOfEpisodes():number{
        return this._numberOfEpisodes;
    }
    get numberOfSeasons():number{
        return this._numberOfSeasons;
    }
    get originCountry():Array<string>{
        return this._originCountry;
    }
    get originalLanguage():string{
        return this._originalLanguage;
    }
    get originalName():string{
        return this._originalName;
    }
    get seasons():Array<Season>{
        return this._seasons;
    }
    get status():string{
        return this._status;
    }
    get type():string{
        return this._type;
    }
}