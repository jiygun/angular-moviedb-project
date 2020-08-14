import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Database } from './database';
import { Http } from "./http";
import { HttpClient } from '@angular/common/http';
import { MovieSummary } from '../models/movie/movie.summary';
import { ShowSummary } from '../models/shared/show.summary';
import { Result } from '../models/result/result';
import { Playing } from '../models/playing/playing';
import { Date } from '../models/shared/dates';
import { Genres } from '../models/genres/genres';
import { Movie } from '../models/movie/movie';
import { ProductionCompany } from '../models/company/production.company';
import { ProductionCountry } from '../models/movie/production.country';
import { Statics } from '../statics/statics';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
    private _database:Database;
    constructor(private httpClient:HttpClient){
        this._database=new Http(httpClient);
    }
    getMovieWithById(movieId:number):Observable<Movie>{
        return new Observable((observe)=>{
            this._database.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${Statics.ApiPath.apiKey}&language=${Statics.ApiPath.languagePath}`).then((result:any) => {
                let genres=new Array<Genres>();
                let productionCompanies=new Array<ProductionCompany>();
                result.genres.forEach(element => {
                    genres.push(new Genres(element.id,element.name));
                });
                result.production_companies.forEach(element => {
                    productionCompanies.push(new ProductionCompany(element.name,element.id,element.logo_path,element.orogin_country));
                });
                observe.next(new Movie(result.id,result.original_title,result.backdrop_path,result.homepage,genres,result.overview,result.popularity,
                    result.poster_path,productionCompanies,result.vote_average,result.vote_count,result.adult,result.belongs_to_collection,result.budget,
                    result.imdb_id,result.oroginal_language,(result.production_countries as Array<ProductionCountry>),result.release_date,result.revenue,
                    result.runtime,null,result.status,result.tagline,result.title,result.video));
            }).catch((err) => {
                observe.error(err.status);
            });
        }); 
    }
    getOnPlay():Observable<Result>{
        return new Observable((observe)=>{
            this._database.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${Statics.ApiPath.apiKey}&language=${Statics.ApiPath.languagePath}&page=1`).then((result:any) => {
                let onPlay=new Array<ShowSummary>();
                result.results.forEach(e => {
                    onPlay.push(new MovieSummary(e.poster_path,e.popularity,e.id,e.backdrop_path,e.vote_average,e.overview,e.genre_ids,e.original_language,e.vote_count,e.title,e.original_title,e.adult,e.release_date,e.video));
                });
                //,new Date(result.dates.minimum,result.dates.maximum)
                observe.next(new Result(result.page,onPlay,result.total_results,result.total_pages));
            }).catch((err) => {
                observe.error(err.status);
            });
        });
    }
    getPopularList():Observable<Result>{
        return new Observable((observe)=>{
            this._database.get(`https://api.themoviedb.org/3/movie/popular?api_key=${Statics.ApiPath.apiKey}&language=${Statics.ApiPath.languagePath}&page=1`).then((result:any) => {
                let popularList=new Array<ShowSummary>();
                result.results.forEach(e => {
                    popularList.push(new MovieSummary(e.poster_path,e.popularity,e.id,e.backdrop_path,e.vote_average,e.overview,e.genre_ids,e.original_language,e.vote_count,e.title,e.original_title,e.adult,e.release_date,e.video));
                });
                observe.next(new Result(result.page,popularList,result.total_results,result.total_pages));
            }).catch((err) => {
                observe.error(err.status);
            });
        });
    }
    getMovieListWithFilters(pageNumber:number,genreIds:string,filterQuery:string):Observable<Result>{
        return new Observable((observe)=>{
            this._database.get(`https://api.themoviedb.org/3/discover/movie?api_key=${Statics.ApiPath.apiKey}&with_genres=${genreIds!=null?genreIds:""}&certification_country=US&certification.lte=G&sort_by=${filterQuery!=null?filterQuery:'popularity.desc'}&page=${pageNumber==null?1:pageNumber}`).then((result:any) => {
                let movieList=new Array<ShowSummary>();
                result.results.forEach(e => {
                    movieList.push(new MovieSummary(e.poster_path,e.popularity,e.id,e.backdrop_path,e.vote_average,e.overview,e.genre_ids,e.original_language,e.vote_count,e.title,e.original_title,e.adult,e.release_date,e.video));
                });
                observe.next(new Result(result.page,movieList,result.total_results,result.total_pages));
            }).catch((err) => {
                observe.error(err.status);
            });
        });
    }
}
