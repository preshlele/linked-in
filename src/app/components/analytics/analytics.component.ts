import { Component, DestroyRef, inject } from '@angular/core';

import { SimilarProfile } from '../../interfaces/profile.model';
import { delay, of, switchMap } from 'rxjs';
import { ProfileService } from '../../features/@common/Services/Profile/profile.service';
import { FeedService } from '../../features/@common/Services/Feed/feed.service';

@Component({
    selector: 'app-analytics',
    templateUrl: './analytics.component.html',
    styleUrl: './analytics.component.scss',
})
export class AnalyticsComponent {
    destroyRef = inject(DestroyRef);
    items: SimilarProfile[] = [];

    constructor(private feedService: FeedService) {}

    ngOnInit(): void {
        of(1)
            .pipe(
                delay(3000),
                switchMap(() => this.feedService.getSimilarProfile()),
            )
            .subscribe({
                next: (data) => {
                    this.items = this.getRandom(data.response);
                },
            });
    }
    getRandom(arr: SimilarProfile[]) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    }
}
