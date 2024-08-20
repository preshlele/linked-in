import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../features/@common/Services/Profile/profile.service';
import { Profile } from '../../pages/profile-settings/profile.model';

@Component({
    selector: 'app-profile',
    templateUrl: './ProfileCard.component.html',
    styleUrl: './ProfileCard.component.scss',
})
export class ProfileCardComponent implements OnInit {
    constructor(private profileService: ProfileService) {}
    imageUrl: string = 'https://picsum.photos/id/1025/150/150';
    profileData: Profile[] = [];

    ngOnInit(): void {
        this.profileService.getMockUserProfile().subscribe((data) => {
            this.profileData = data;
        });
    }
}
