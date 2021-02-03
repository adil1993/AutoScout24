import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  url = 'https://localhost:44367/weatherforecast';  // URL to web api

  constructor(private http: HttpClient) { }

    /** GET heroes from the server */
    getResult(): Observable<any> {
      return this.http.get<any>(this.url)
        .pipe(
        );
    }
}
