import { Post } from './../../../../interfaces/model';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PostResponse } from '../../../../interfaces/posts.model';
import { SimilarProfile, SimilarProfileResponse } from '../../../../interfaces/profile.model';

@Injectable({
    providedIn: 'root',
})
export class FeedService {
    constructor(private http: HttpClient) {}
    private _rapidApi: string = environment.rapidApiUrl;
    private _link: string = environment.base_link;
    private _page: number = 1;

    getFeed(): Observable<PostResponse> {
        const params = new HttpParams()
            .set('profile_url', `${this._link}/in/ingmar-klein`)
            .set('page', this._page.toString());
        return this.http.get<PostResponse>(`${this._rapidApi}/profile_updates`, { params });
    }

    getMockFeed(): Observable<Post[]> {
        return this.http.get<Post[]>(`${environment}/posts`);
    }

    getSimilarProfile(): Observable<SimilarProfileResponse> {
        const params = new HttpParams().set('profileUrl', `${this._rapidApi}/in/ingmar-klein`);
        return this.http.get<SimilarProfileResponse>(this._rapidApi + '/similar_profiles', { params });
    }

    getSimilarProfileMock(): Observable<SimilarProfile[]> {
        return this.http.get<SimilarProfile[]>(environment + '/response');
    }
}
