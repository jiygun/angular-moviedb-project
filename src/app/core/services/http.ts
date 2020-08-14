import { Database } from './database';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Http implements Database{
    constructor(private http:HttpClient){}
    insert(url: string, data: any) {
    }
    get(url: string, ...[]: Iterable<any>) {
        return new Promise((resolve,reject)=>{
            this.http.get(url).subscribe(response=>{
                resolve(response);
            },error=>reject(error))
        });
    }
    update(url: string, data: any) {
    }
    delete(url: string, data: any) {
    }
}