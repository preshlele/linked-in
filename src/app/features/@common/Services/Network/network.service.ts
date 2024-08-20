import { HttpClient } from '@angular/common/http'
import { Injectable, signal } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { forkJoin, map, Observable, tap } from 'rxjs';
import { Recommendation } from '../../../../interfaces/model';

@Injectable({
    providedIn: 'root',
})
export class NetworkService {
    constructor(private http: HttpClient) {}
    allItems = signal<Recommendation[]>([]);
    private serverApi: string = environment.serverApi;

    getRecommendations(): Observable<Recommendation[]> {
        const companies = this.http.get<Recommendation[]>(`${this.serverApi}/companies`);
        const persons = this.http.get<Recommendation[]>(`${this.serverApi}/persons`);
        return forkJoin([companies, persons]).pipe(
            map(([companiesReq, personsReq]) => [...companiesReq, ...personsReq]), tap((data) => {
                this.allItems.set(data);
            })
        );
    }
}
