import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { authInterceptor } from './interceptor/auth.interceptor';
import { LayoutComponent } from './layout/layout/layout.component';

@NgModule({
    declarations: [AppComponent, LoginPageComponent, RegisterPageComponent, HomePageComponent, LayoutComponent],
    imports: [BrowserModule, AppRoutingModule, MatIconModule, ReactiveFormsModule, MatFormFieldModule],
    providers: [provideAnimationsAsync(), provideHttpClient(withInterceptors([authInterceptor]))],
    bootstrap: [AppComponent],
})
export class AppModule {}
