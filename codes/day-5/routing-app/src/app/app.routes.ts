import { Routes } from "@angular/router";
import { HomeComponent } from "./common-resources/components/home/home.component";
import { PageNotFoundComponent } from "./common-resources/components/page-not-found/page-not-found.component";

export const appRoues: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
]