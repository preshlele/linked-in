import { Component } from '@angular/core';
import { ProfileService } from '../../features/@common/Services/Profile/profile.service';
import { Location } from '@angular/common';
import { ProfileData } from '../../interfaces/profile.model';

@Component({
    selector: 'app-profile-settings',
    templateUrl: './profile-settings.component.html',
    styleUrl: './profile-settings.component.scss',
})
export class ProfileSettingsComponent {
    constructor(
        private _profileService: ProfileService,
        private _location: Location,
    ) {}
    mockProfileData: ProfileData = {} as ProfileData;
    item: ProfileData = {} as ProfileData;

    ngAfterViewInit(): void {
        this._profileService.getUserProfile().subscribe((data) => {
            this.item = data.data;
        });
    }

    navigateBack() {
        this._location.back();
    }
}
