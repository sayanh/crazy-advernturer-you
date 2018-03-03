import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { MorphComponent } from './app/morph/morph.component';
import { LoginComponent } from './app/login/login.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'morph', component: MorphComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule { }
