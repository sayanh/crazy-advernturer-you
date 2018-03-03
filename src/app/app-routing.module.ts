import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { MorphComponent } from './morph/morph.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '', redirectTo: '/morph', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'morph', component: MorphComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule { }
