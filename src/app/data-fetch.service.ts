import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {

  constructor(private http: HttpClient) { }

  getPeopleData(): Observable<any> {
    return this.http.get("./../assets/data/people.json")
  }

  getStatusData(): Observable<any> {
    return this.http.get("./../assets/data/statuses.json")
  }

  getTaskData(): Observable<any> {
    return this.http.get("./../assets/data/tasks.json")
  }

  subjectDialog = new Subject<any>();
}
