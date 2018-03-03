import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VideoService {

  url: string
  constructor(private http: HttpClient) {
    this.url = "http://localhost:8000"
  }

  /** GET videos/:id */
  getVideo(id: string): Observable<any> {

    // let httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //   }),
    // };
    const url = `${this.url}/temp/output${id}.mp4`;
    // return this.http.get<any>(url, httpOptions);
    return this.http.get<any>(url);
  }
}
