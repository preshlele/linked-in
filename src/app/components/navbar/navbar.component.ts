import { Component } from '@angular/core';
import { AuthService } from '../../features/auth/auth-service.service';
import { FeedService } from '../../features/@common/Services/Feed/feed.service';
import { Post } from '../../interfaces/model';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
    logoImage: string = 'assets/images/linkedIn-logo.png';
    mockPosts:Post[] =  [];
    filteredPosts: Post[] = [];
    searchTerm$ = new Subject<string>();

    constructor(
        private authService: AuthService,
        private feedService: FeedService,
    ) {}

    logoutUser(): void {
        this.authService.logout();
    }

    

    search(value: string): void {}
}
