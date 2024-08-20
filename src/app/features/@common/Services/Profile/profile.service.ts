import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Profile } from '../../../../pages/profile-settings/profile.model';

@Injectable({
    providedIn: 'root',
})
export class ProfileService {
    constructor(private http: HttpClient) {}
    private apiKey: string = environment.rapidApiKey;
    private mockServerApi: string = environment.serverApi;
    private serverApi: string = environment.rapidApi;
    private profileSubject = new BehaviorSubject<Profile[]>([]);
    public profile$ = this.profileSubject.asObservable();

    getUserProfile(): Observable<Profile[]> {
        const headers = new HttpHeaders({
            'x-rapidapi-key': this.apiKey,
            'x-rapidapi-host': 'linkedin-data-api.p.rapidapi.com/pop',
            'Content-Type': 'application/json',
        });
        return this.http.get<Profile[]>(`${this.serverApi}?username=adamselipsky`, {
            headers,
        });
    }

    getMockUserProfile(): Observable<Profile[]> {
        return this.http.get<Profile[]>(`${this.mockServerApi}/profile`);
    }

    setProfileData(data: Profile[]) {
        this.profileSubject.next(data);
    }

    getProfileData(): Observable<Profile[]> {
        return this.profile$;
    }
}
