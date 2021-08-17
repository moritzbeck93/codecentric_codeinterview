import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { Mitarbeiter } from '../model/Mitarbeiter';

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  constructor(private http: HttpClient) { }

  private apiURL: string = 'http://localhost:8080';

  getZufriedenheitScrumMaster(): Observable<any> {
    let mitarbeiter = new Subject<Mitarbeiter[]>();
    this.http.get(this.apiURL + '/mitarbeiter', { responseType: 'text', observe: 'response' }).
      subscribe(response => {
        mitarbeiter.next(JSON.parse(response.body));
      });
    return mitarbeiter.asObservable();
  }
}
