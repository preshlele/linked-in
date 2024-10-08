import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCardComponent } from './ProfileCard.component';

describe('TaskbarComponent', () => {
    let component: ProfileCardComponent;
    let fixture: ComponentFixture<ProfileCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProfileCardComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ProfileCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
