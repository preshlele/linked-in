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

@NgModule({
    declarations: [AppComponent, LoginPageComponent, RegisterPageComponent],
    imports: [BrowserModule, AppRoutingModule, MatIconModule, ReactiveFormsModule, MatFormFieldModule],
    providers: [provideAnimationsAsync()],
    bootstrap: [AppComponent],
})
export class AppModule {}
