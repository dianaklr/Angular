import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPosts} from "../interfaces";
import {urls} from "../configs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient :HttpClient) {

  }
  getAll():Observable<IPosts[]>{
    return this.httpClient.get<IPosts[]>(urls.posts)
  }
  getById(id:number):Observable<IPosts>{
    return this.httpClient.get<IPosts>(`${urls.posts}/${id}`)
  }
}
