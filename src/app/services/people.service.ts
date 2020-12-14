import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeopleResponse } from '../interfaces/people-response.interface';

const peopleUrl='https://api.themoviedb.org/3/person';
const apiKey='9b74fe882e2e87998ba67bb017d5a411'
@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http:HttpClient) {}
  
  public getPeopleList(): Observable<PeopleResponse> {
    return this.http.get<PeopleResponse>(peopleUrl+'/popular?api_key='+apiKey);
  }
}
