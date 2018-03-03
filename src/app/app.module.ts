import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MorphComponent } from './morph/morph.component';
import { LoginComponent } from './login/login.component';
import { YoutubeService } from './shared/youtube.service';
import { YoutubeListComponent } from './youtube-list/youtube-list.component';
<<<<<<< HEAD
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
=======
import { VideoComponent } from './video/video.component';
import { VideoService } from './shared/video.service';
>>>>>>> temp


@NgModule({
  declarations: [
    AppComponent,
    MorphComponent,
    LoginComponent,
    YoutubeListComponent,
    VideoComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [YoutubeService, VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
