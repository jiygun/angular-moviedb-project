import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Database } from './database';
import { HttpClient } from '@angular/common/http';
import { Http } from "./http";
import { MovieSearchModel } from '../models/movie/movie.search.model';
import { PersonSearchModel } from '../models/person/person.search.model';
import { SeriesSearchModel } from '../models/series/series.search.model';
import { ResultSearch } from '../models/result/result.search';
import { Statics } from '../statics/statics';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private _database:Database;
  constructor(private httpClient:HttpClient){
      this._database=new Http(httpClient);
  }
  getResultWithQuery(query:string,pageNumber:number):Observable<ResultSearch>{
    return new Observable((observe)=>{
        this._database.get(`https://api.themoviedb.org/3/search/multi?api_key=${Statics.ApiPath.apiKey}&language=${Statics.ApiPath.languagePath}&page=1&query=${query}`).then((result:any) => {
            let results=new Array();
            result.results.forEach(e => {
                if(e.media_type=="movie"){
                    results.push(new MovieSearchModel(e.poster_path,e.adult,e.overwiew,e.release_date,e.original_title,e.genre_ids,
                        e.id,e.media_type,e.original_language,e.title,e.backdrop_path,e.popularity,e.vote_count,e.video,e.vote_average));
                }else if(e.media_type=="person"){
                    results.push(new PersonSearchModel(e.profile_path,e.adult,e.id,e.media_type,e.known_for,e.name,e.popularity));
                }else{
                    results.push(new SeriesSearchModel(e.poster_path,e.popularity,e.id,e.overview,e.backdrop_path,e.vote_average,
                        e.media_type,e.first_air_date,e.origin_country,e.genre_ids,e.original_language,e.vote_count,e.name,e.original_name));
                }
            });
            observe.next(new ResultSearch(result.page,results,result.total_results,result.total_pages));
        }).catch((err) => {
            observe.error(err.status);
        });
    }); 
  }
}
