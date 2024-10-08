import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../features/@common/Services/Profile/profile.service';
import { environment } from '../../../environments/environment';
import { ProfileData } from '../../interfaces/profile.model';

@Component({
    selector: 'app-profile',
    templateUrl: './ProfileCard.component.html',
    styleUrl: './ProfileCard.component.scss',
})
export class ProfileCardComponent implements OnInit {
    constructor(private profileService: ProfileService) {}
    items: ProfileData = {} as ProfileData;

    ngOnInit(): void {
        this.profileService.getUserProfile().subscribe((data) => {
            this.items = data.data;
        });
    }
}
