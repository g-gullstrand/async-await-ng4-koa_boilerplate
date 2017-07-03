import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  testAsync(){
    //NOTE returns a promise
    return this.http.get('api/testAsync')
      .map((response: Response) => response.json());
  }
}
