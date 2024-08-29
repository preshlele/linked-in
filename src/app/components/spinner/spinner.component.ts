import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../features/@common/Services/Loading/loading.service';
import { delay } from 'rxjs';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrl: './spinner.component.scss',
})
export class SpinnerComponent implements OnInit {
    constructor(private _loading: LoadingService) {}
    loading: boolean = false;

    ngOnInit(): void {
        this.listenToLoading();
    }

    listenToLoading(): void {
        this._loading.loadingSub.pipe(delay(0)).subscribe((loading) => {
            this.loading = loading;
        });
    }
}
