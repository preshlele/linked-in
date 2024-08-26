import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { SimilarProfile } from '../../interfaces/profile.model';
import { FeedService } from '../../features/@common/Services/Feed/feed.service';

@Component({
    selector: 'app-my-network',
    templateUrl: './my-network.component.html',
    styleUrl: './my-network.component.scss',
})
export class MyNetworkComponent {
    constructor(private _location: Location) {}
    feedService = inject(FeedService);
    items: SimilarProfile[] = [];
    ngOnInit(): void {
        this.feedService.getSimilarProfile().subscribe((data) => {
            this.items = data.response;
        });
    }

    navigateBack() {
        this._location.back();
    }
}
