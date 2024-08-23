import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { Observable } from 'rxjs';
import { ProfileDataResponse } from '../../../../interfaces/profile.model';

@Injectable({
    providedIn: 'root',
})
export class ProfileService {
    constructor(private http: HttpClient) {}
    private mockServerApi: string = environment.mockServerApi;
    private _rapidApi: string = environment.rapidApiUrl;

    getUserProfile(): Observable<ProfileDataResponse> {
        const body = { link: environment.base_link };
        return this.http.post<ProfileDataResponse>(`${this._rapidApi}/person`, body);
    }

    getMockUserProfile(): Observable<ProfileDataResponse> {
        return this.http.get<ProfileDataResponse>(`${this.mockServerApi}/profile`);
    }
}
