import { Component, DestroyRef, inject, signal } from '@angular/core';
import { Recommendation } from '../../interfaces/model';
import { NetworkService } from '../../features/@common/Services/Network/network.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-analytics',
    templateUrl: './analytics.component.html',
    styleUrl: './analytics.component.scss',
})
export class AnalyticsComponent {
    destroyRef = inject(DestroyRef);
    items: Recommendation[] = [];

    constructor(private networkService: NetworkService) {}

    ngOnInit(): void {
        this.networkService
            .getRecommendations()
            .subscribe({
                next: (data) => {
                    this.items = this.getRandom(data);
                },
                error: (err) => {
                    console.log(err);
                },
            });
    }
    getRandom(arr: Recommendation[]) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 4);
    }
}
