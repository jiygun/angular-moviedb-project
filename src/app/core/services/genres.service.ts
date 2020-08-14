import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Database } from './database';
import { HttpClient } from '@angular/common/http';
import { Http } from "./http";
import { Genres } from '../models/genres/genres';
import { Statics } from '../statics/statics';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  private _database:Database;
  constructor(private httpClient:HttpClient){
      this._database=new Http(httpClient);
  }
  getGenreListWithPath(urlPath:string):Observable<Array<Genres>>{
    return new Observable((observe)=>{
        this._database.get(urlPath).then((result:any) => {
            let genresList=new Array<Genres>();
            result.genres.forEach(e => {
                genresList.push(new Genres(e.id,e.name));
            });
            observe.next(genresList);
        }).catch((err) => {
            observe.error(err.status);
        });
    });
  }
  getMovieGenres():Observable<Array<Genres>>{
      return new Observable((observe)=>{
          this._database.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${Statics.ApiPath.apiKey}&language=${Statics.ApiPath.languagePath}`).then((result:any) => {
              let genresList=new Array<Genres>();
              result.genres.forEach(e => {
                  genresList.push(new Genres(e.id,e.name));
              });
              observe.next(genresList);
          }).catch((err) => {
              observe.error(err.status);
          });
      });
  }
  getSeriesGenres():Observable<Array<Genres>>{
      return new Observable((observe)=>{
          this._database.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${Statics.ApiPath.apiKey}&language=${Statics.ApiPath.languagePath}`).then((result:any) => {
              let genresList=new Array<Genres>();
              result.genres.forEach(e => {
                  genresList.push(new Genres(e.id,e.name));
              });
              observe.next(genresList);
          }).catch((err) => {
              observe.error(err.status);
          });
      });
  }
}
