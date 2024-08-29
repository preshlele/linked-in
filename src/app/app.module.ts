import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { authInterceptor } from './interceptor/auth.interceptor';
import { LayoutComponent } from './layout/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileCardComponent } from './components/ProfileCard/ProfileCard.component';
import { FeedComponent } from './components/feed/feed.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { MyNetworkComponent } from './pages/my-network/my-network.component';
import { NgToastModule } from 'ng-angular-popup';
import { refreshInterceptor } from './interceptor/refresh.interceptor';
import { ProfileSettingsComponent } from './pages/profile-settings/profile-settings.component';
import { rapidApiInterceptor } from './interceptor/rapid-api.interceptor';
import { errorInterceptor } from './interceptor/error.interceptor';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { loadingInterceptor } from './interceptor/loading.interceptor';
import { cachingInterceptor } from './interceptor/caching.interceptor';


@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        RegisterPageComponent,
        HomePageComponent,
        LayoutComponent,
        NavbarComponent,
        ProfileCardComponent,
        FeedComponent,
        AnalyticsComponent,
        MyNetworkComponent,
        ProfileSettingsComponent,
        SpinnerComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, MatIconModule, MatCardModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, NgToastModule, MatProgressSpinnerModule],
    providers: [provideAnimationsAsync(), provideHttpClient(withInterceptors([authInterceptor, rapidApiInterceptor, refreshInterceptor, errorInterceptor, loadingInterceptor, cachingInterceptor]))],
    bootstrap: [AppComponent],
})
export class AppModule {}
