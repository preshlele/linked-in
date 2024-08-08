import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginPageComponent,
    },
    {
        path: 'register',
        component: RegisterPageComponent,
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                component: HomePageComponent,
                canActivate: [authGuard],
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
