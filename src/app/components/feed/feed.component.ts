import { Component, DestroyRef, inject } from '@angular/core';
import { LinkedInPost } from '../../interfaces/model';
import { FeedService } from '../../features/@common/Services/Feed/feed.service';
import { AuthService } from '../../features/auth/auth-service.service';
import { Post } from '../../interfaces/posts.model';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrl: './feed.component.scss',
})
export class FeedComponent {
    feedService = inject(FeedService);
    authService = inject(AuthService);
    destroyRef = inject(DestroyRef);
    posts: Post[] = [];
    mockPosts: LinkedInPost[] = [];

    ngOnInit(): void {
        this.feedService
        .getFeed().subscribe({
            next: (data) => {
                this.posts = data.posts;
            },
        });
        
    }
}
