import { Component } from '@angular/core';
import { ProfileService } from '../../features/@common/Services/Profile/profile.service';
import { Profile } from './profile.model';
import { Location } from '@angular/common';

@Component({
    selector: 'app-profile-settings',
    templateUrl: './profile-settings.component.html',
    styleUrl: './profile-settings.component.scss',
})
export class ProfileSettingsComponent {
    constructor(private profileService: ProfileService, private _location: Location) {}
    profilePic: string = 'https://picsum.photos/id/1025/150/150';
    mockProfileData: Profile[] = [];
    profileData: Profile[] = [];

    ngAfterViewInit(): any {
        this.profileService.getMockUserProfile().subscribe((data) => {
            this.mockProfileData = data;
        });
    }

    navigateBack() {
        this._location.back();
    }
}
