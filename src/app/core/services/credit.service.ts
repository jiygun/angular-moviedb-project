import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Database } from './database';
import { HttpClient } from '@angular/common/http';
import { Http } from "./http";
import { ShowCredit } from '../models/show.credit/show.credit';
import { CastSummary } from '../models/show.credit/cast.summary';
import { CrewSummary } from '../models/show.credit/crew.summary';
import { MovieCredit } from '../models/credit/movie.credit';
import { SeriesCredit } from '../models/credit/series.credit';
import { MovieCast } from '../models/credit/movie.cast';
import { MovieCrew } from '../models/credit/movie.crew';
import { SeriesCast } from '../models/credit/series.cast';
import { SeriesCrew } from '../models/credit/series.crew';
import { Statics } from '../statics/statics';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  private _database:Database;
  constructor(private httpClient:HttpClient){
      this._database=new Http(httpClient);
  }
  getMovieCreditsWithById(movieId:number):Observable<ShowCredit>{
    return new Observable((observe)=>{
        this._database.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${Statics.ApiPath.apiKey}`).then((result:any) => {
            let casts=new Array<CastSummary>();
            let crews=new Array<CrewSummary>();
            result.cast.forEach(e => {
                casts.push(new CastSummary(e.cast_id,e.character,e.credit_id,e.gender,e.id,e.name,e.order,e.profile_path));
            });
            result.crew.forEach(e => {
                crews.push(new CrewSummary(e.credit_id,e.department,e.gender,e.id,e.job,e.name,e.profile_path));
            });
            observe.next(new ShowCredit(result.id,casts,crews));
        }).catch((err) => {
            observe.error(err.status);
        });
    }); 
  }
  getSerieCreditsWithById(seriesId:number):Observable<ShowCredit>{
      return new Observable((observe)=>{
          this._database.get(`https://api.themoviedb.org/3/tv/${seriesId}/credits?api_key=${Statics.ApiPath.apiKey}`).then((result:any) => {
              let casts=new Array<CastSummary>();
              let crews=new Array<CrewSummary>();
              result.cast.forEach(e => {
                  casts.push(new CastSummary(e.cast_id,e.character,e.credit_id,e.gender,e.id,e.name,e.order,e.profile_path));
              });
              result.crew.forEach(e => {
                  crews.push(new CrewSummary(e.credit_id,e.department,e.gender,e.id,e.job,e.name,e.profile_path));
              });
              observe.next(new ShowCredit(result.id,casts,crews));
          }).catch((err) => {
              observe.error(err.status);
          });
      }); 
  }
  getMovieCreditsWithByPeopleId(peopleId:number):Observable<MovieCredit>{
      return new Observable((observe)=>{
          this._database.get(` https://api.themoviedb.org/3/person/${peopleId}/movie_credits?api_key=${Statics.ApiPath.apiKey}&language=${Statics.ApiPath.languagePath}`).then((result:any) => {
              let casts=new Array<MovieCast>();
              let crews=new Array<MovieCrew>();
              result.cast.forEach(e => {
                  casts.push(new MovieCast(e.character,e.credit_id,e.release_date,e.vote_count,e.vide,e.adult,e.vote_average,
                      e.title,e.genre_ids,e.original_language,e.original_title,e.popularity,e.id,e.backdrop_path,e.overview,e.poster_path));
              });
              result.crew.forEach(e => {
                  crews.push(new MovieCrew(e.id,e.department,e.original_language,e.original_title,e.job,e.overview,e.vote_count,
                      e.video,e.poster_path,e.backdrop_path,e.title,e.popularity,e.genre_ids,e.vote_average,e.adult,e.release_date,e.credit_id));
              });
              observe.next(new MovieCredit(result.id,casts,crews));
          }).catch((err) => {
              observe.error(err.status);
          });
      }); 
  }
  getSeriesCreditsWithByPeopleId(peopleId:number):Observable<SeriesCredit>{
      return new Observable((observe)=>{
          this._database.get(` https://api.themoviedb.org/3/person/${peopleId}/tv_credits?api_key=${Statics.ApiPath.apiKey}&language=${Statics.ApiPath.languagePath}`).then((result:any) => {
              let casts=new Array<SeriesCast>();
              let crews=new Array<SeriesCrew>();
              result.cast.forEach(e => {
                  casts.push(new SeriesCast(e.credit_id,e.original_name,e.id,e.genre_ids,e.character,e.name,e.poster_path,e.vote_count,e.vote_average,e.popularity,
                      e.episode_count,e.original_language,e.first_air_date,e.backdrop_path,e.overview,e.origin_country));
              });
              result.crew.forEach(e => {
                  crews.push(new SeriesCrew(e.id,e.department,e.original_language,e.episode_count,e.job,e.overview,e.origin_country,
                      e.original_name,e.genre_ids,e.name,e.firs_air_date,e.backdrop_path,e.popularity,e.vote_count,e.vote_average,e.poster_path,e.credit_id));
              });
              observe.next(new SeriesCredit(result.id,casts,crews));
          }).catch((err) => {
              observe.error(err.status);
          });
      }); 
  }
}
