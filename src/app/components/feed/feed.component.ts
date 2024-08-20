import { Component, DestroyRef, inject, signal } from '@angular/core';
import { LinkedInPost, Post } from '../../interfaces/model';
import { FeedService } from '../../features/@common/Services/Feed/feed.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthService } from '../../features/auth/auth-service.service';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrl: './feed.component.scss',
})
export class FeedComponent {
    feedService = inject(FeedService);
    authService = inject(AuthService);
    destroyRef = inject(DestroyRef);
    posts: LinkedInPost[] = [];
    mockPosts: Post[] = [];

    ngOnInit(): void {
        this.feedService.getFeed().subscribe({
            next: (data) => {
                this.posts = data.data;
            },
            error: (err) => {
                console.log(err);
            },
        });
        // RAPID MOCK DATA
        // .getMockFeed()
        // .subscribe({
        //     next: (data) => {
        //         this.mockPosts = data;
        //         console.log(this.mockPosts, 'all-data');
        //     },
        //     error: (err) => {
        //         console.log(err);
        //     },
        // });

        setTimeout(() => {
            this.authService.validateUser().subscribe((data) => {
                console.log(data);
            });
        }, 7000);
    }

    formatLikes(num: number) {
        if (num >= 1000) {
            return `${(num / 1000).toFixed(1)}K`;
        } else {
            return num.toString();
        }
    }
}
