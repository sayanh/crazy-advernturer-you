import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { MorphComponent } from './morph/morph.component';
import { LoginComponent } from './login/login.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'morph', component: MorphComponent },
    { path: 'video/:id', component: VideoComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule { }
