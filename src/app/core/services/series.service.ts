import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Database } from './database';
import { HttpClient } from '@angular/common/http';
import { Http } from "./http";
import { ShowSummary } from '../models/shared/show.summary';
import { SeriesSummary } from '../models/series/series.summary';
import { Result } from '../models/result/result';
import { Series } from '../models/series/series';
import { Episode } from '../models/series/episode';
import { Genres } from '../models/genres/genres';
import { ProductionCompany } from '../models/company/production.company';
import { Creator } from '../models/series/creator';
import { Network } from '../models/series/network';
import { Season } from '../models/series/season';
import { Statics } from '../statics/statics';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private _database:Database;
  constructor(private httpClient:HttpClient){
      this._database=new Http(httpClient);
  }
  getSeriesWithById(seriesId:number):Observable<Series>{
    return new Observable((observe)=>{
        this._database.get(`https://api.themoviedb.org/3/tv/${seriesId}?api_key=${Statics.ApiPath.apiKey}&language=${Statics.ApiPath.languagePath}`).then((r:any) => {
            let lastEpisode=new Episode(r.last_episode_to_air.id,r.last_episode_to_air.name,r.last_episode_to_air.air_date,
                r.last_episode_to_air.episode_number,r.last_episode_to_air.overview,null,r.last_episode_to_air.season_number,
                r.last_episode_to_air.season_number,r.last_episode_to_air.still_path,r.last_episode_to_air.vote_average,
                r.last_episode_to_air.vote_count);
            observe.next(new Series(r.id,r.name,r.backdrop_path,r.homepage,this.getGenresList(r.genres),r.overview,r.overview,r.poster_path,this.getCompanies(r.production_companies),
                r.vote_average,r.vote_count,this.getCreators(r.created_by),r.episode_run_time,r.first_air_date,r.in_production,r.languages,
                r.last_air_date,lastEpisode,r.next_episode_to_air,this.getNetworks(r.networks),r.number_of_episodes,r.number_of_seasons,
                r.origin_country,r.original_language,r.original_name,this.getSeasons(r.seasons),r.status,r.type));
        }).catch((err) => {
            observe.error(err.status);
        });
    }); 
  }
  getOnPlay():Observable<Result>{
      return new Observable((observe)=>{
          this._database.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${Statics.ApiPath.apiKey}&language=${Statics.ApiPath.languagePath}&page=1`).then((result:any) => {
              let onPlay=new Array<ShowSummary>();
              result.results.forEach(e => {
                  onPlay.push(new SeriesSummary(e.poster_path,e.popularity,e.id,e.backdrop_path,e.vote_average,e.overview,e.genre_ids,e.original_language,e.vote_count,e.name,e.original_name,e.first_air_date,e.origin_country));
              });
              observe.next(new Result(result.page,onPlay,result.total_results,result.total_pages));
          }).catch((err) => {
              observe.error(err.status);
          });
      });
  }
  getPopularList():Observable<Result>{
      return new Observable((observe)=>{
          this._database.get(`https://api.themoviedb.org/3/tv/popular?api_key=${Statics.ApiPath.apiKey}&language=${Statics.ApiPath.languagePath}&page=1`).then((result:any) => {
              let popularList=new Array<ShowSummary>();
              result.results.forEach(e => {
                  popularList.push(new SeriesSummary(e.poster_path,e.popularity,e.id,e.backdrop_path,e.vote_average,e.overview,e.genre_ids,e.original_language,e.vote_count,e.name,e.original_name,e.first_air_date,e.origin_country));
              });
              observe.next(new Result(result.page,popularList,result.total_results,result.total_pages));
          }).catch((err) => {
              observe.error(err.status);
          });
      });
  }
  getSeriesListWithFilters(pageNumber:number,genreIds:string,filterQuery:string):Observable<Result>{
      return new Observable((observe)=>{
          this._database.get(`https://api.themoviedb.org/3/discover/tv?api_key=${Statics.ApiPath.apiKey}&with_genres=${genreIds!=null?genreIds:""}&language=${Statics.ApiPath.languagePath}&sort_by=${filterQuery!=null?filterQuery:'popularity.desc'}&page=${pageNumber==null?1:pageNumber}&timezone=America%2FNew_York&include_null_first_air_dates=false`).then((result:any) => {
              let movieList=new Array<ShowSummary>();
              result.results.forEach(e => {
                  movieList.push(new SeriesSummary(e.poster_path,e.popularity,e.id,e.backdrop_path,e.vote_average,e.overview,e.genre_ids,e.original_language,e.vote_count,e.name,e.original_name,e.first_air_date,e.origin_country));
              });
              observe.next(new Result(result.page,movieList,result.total_results,result.total_pages));
          }).catch((err) => {
              observe.error(err.status);
          });
      });
  }
  private getGenresList(genresList:Array<object>):Array<Genres>{
      let genres=new Array<Genres>();
      genresList.forEach((e:any) => {
          genres.push(new Genres(e.id,e.name));
      });
      return genres;
  }
  private getCompanies(productionCompanyList:Array<object>):Array<ProductionCompany>{
      let productionCompanies=new Array<ProductionCompany>();
      productionCompanyList.forEach((element:any) => {
          productionCompanies.push(new ProductionCompany(element.name,element.id,element.logo_path,element.origin_country));
      });
      return productionCompanies;
  }
  private getCreators(creatorList:Array<object>):Array<Creator>{
      let creators=new Array<Creator>();
      creatorList.forEach((element:any) => {
          creators.push(new Creator(element.id,element.credit_id,element.name,element.gender,element.profile_path));
      });
      return creators;
  }
  private getNetworks(networkList:Array<object>):Array<Network>{
      let networks=new Array<Network>();
      networkList.forEach((element:any) => {
          networks.push(new Network(element.id,element.name,element.logo_path,element.origin_country));
      });
      return networks;
  }
  private getSeasons(seasonList:Array<object>):Array<Season>{
      let seasons=new Array<Season>();
      seasonList.forEach((element:any) => {
          seasons.push(new Season(element.air_date,element.episode_count,element.id,element.name,element.overview,element.poster_path,element.season_number));
      });
      return seasons;
  }
}
