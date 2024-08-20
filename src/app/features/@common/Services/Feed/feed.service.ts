import { LinkedInPost, LinkedInPostResponse, Post } from './../../../../interfaces/model';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class FeedService {
    constructor(private http: HttpClient) {}
    private serverApi: string = environment.rapidApi;
    private mockServerApi: string = environment.serverApi
    private apiKey: string = environment.rapidApiKey;

    getFeed(): Observable<LinkedInPostResponse> {
        const headers = new HttpHeaders({
            'x-rapidapi-key': this.apiKey,
            'x-rapidapi-host': 'linkedin-data-api.p.rapidapi.com',
            'Content-Type': 'application/json',
        });
        return this.http.get<LinkedInPostResponse>(`${this.serverApi}?username=adamselipsky`, { headers });
    }

    getMockFeed(): Observable<Post[]> {
        return this.http.get<Post[]>(`${this.mockServerApi}/posts`);
    }
}
