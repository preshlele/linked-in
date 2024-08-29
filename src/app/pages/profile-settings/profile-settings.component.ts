import { Component } from '@angular/core';
import { ProfileService } from '../../features/@common/Services/Profile/profile.service';
import { Location } from '@angular/common';
import { ProfileData } from '../../interfaces/profile.model';
import { map, Observable } from 'rxjs';

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
    profile$: Observable<ProfileData> = new Observable<ProfileData>();

    ngAfterViewInit(): void {
        this.profile$ = this._profileService.getUserProfile().pipe(
            map((res) => res.data),
        )
    }

    navigateBack() {
        this._location.back();
    }
}
