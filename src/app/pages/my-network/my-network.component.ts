import { Component, inject } from '@angular/core';
import { Recommendation } from '../../interfaces/model';
import { NetworkService } from '../../features/@common/Services/Network/network.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-my-network',
    templateUrl: './my-network.component.html',
    styleUrl: './my-network.component.scss',
})
export class MyNetworkComponent {
    constructor(private _location: Location) {}
    networkService = inject(NetworkService);
    datas: Recommendation[] = [];
    ngOnInit(): void {
      this.datas = this.networkService.allItems();
        if (this.datas.length > 1) {
            this.datas = this.networkService.allItems();
        }
        else{
            this.networkService.getRecommendations().subscribe((data) => {
                this.datas = data;
            }) 
        }
    }

    navigateBack() {
        this._location.back();
    }
}
