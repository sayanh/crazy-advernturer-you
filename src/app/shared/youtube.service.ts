import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class YoutubeService {
  url: string
  key: string
  constructor(private http: HttpClient) {
    this.url = 'https://www.googleapis.com/youtube/v3/videos';
    this.key = 'AIzaSyCgtUpkT4_gDHBHd74N6sb85YJediqUuec'
  }


  //https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&key=AIzaSyCgtUpkT4_gDHBHd74N6sb85YJediqUuec&id=7lCDEYXw3mM

  /** List videos */
  listVideos(part: string): Observable<JSON> {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams().set('part', 'snippet,contentDetails').set('key', this.key).set('id', '7lCDEYXw3mM')
    };
    const url = `${this.url}`;
    return this.http.get<JSON>(url, httpOptions);
  }

}
