import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Database } from './database';
import { HttpClient } from '@angular/common/http';
import { Http } from "./http";
import { Person } from '../models/person/person';
import { ResultPerson } from '../models/result/result.person';
import { PersonListModel } from '../models/person/person.list.model';
import { Statics } from '../statics/statics';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private _database:Database;
  constructor(private httpClient:HttpClient){
      this._database=new Http(httpClient);
  }
  getPeopleListWithPageNumber(pageNumber:number):Observable<ResultPerson>{
    return new Observable((observe)=>{
        this._database.get(`https://api.themoviedb.org/3/person/popular?api_key=${Statics.ApiPath.apiKey}&language=${Statics.ApiPath.languagePath}&page=${pageNumber}`).then((result:any) => {
            let personList=new Array();
            result.results.forEach(e => {
                personList.push(new PersonListModel(e.profile_path,e.adult,e.id,e.known_for,e.name,e.popularity));
            });
            observe.next(new ResultPerson(result.page,personList,result.total_results,result.total_pages));
        }).catch((err) => {
            observe.error(err.status);
        });
    }); 
  }
  getPeopleWithById(personId:number):Observable<Person>{
      return new Observable((observe)=>{
          this._database.get(`https://api.themoviedb.org/3/person/${personId}?api_key=${Statics.ApiPath.apiKey}&language=${Statics.ApiPath.languagePath}`).then((result:any) => {
              observe.next(new Person(result.birthday,result.known_for_department,result.deathday,result.id,result.name,
                  result.also_known_as,result.gender,result.biography,result.popularity,result.place_of_birth,
                  result.profile_path,result.adult,result.imdb_id,result.homepage));
          }).catch((err) => {
              observe.error(err.status);
          });
      }); 
  }
}
