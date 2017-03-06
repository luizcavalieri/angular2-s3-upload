import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { UploadComponent } from './upload/upload.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'upload', component: UploadComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: NoContentComponent },
];
