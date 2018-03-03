import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../shared/video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  url: string
  id: string
  video: any
  @ViewChild("videoElement") videoElement: any
  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService,
  ) {
    this.video = this.videoElement.nativeElement;
    const backendUrl = "http://localhost:8000"
    this.video.src = `${backendUrl}/temp/output3.mp4`;

  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("id is " + this.id)
  }

  getVideo(id: string) {

    // this.videoService.getVideo(id)
    //   .subscribe((resp) => {
    //     console.log(resp)
    //   }, (err) => {
    //     alert(err.message);
    //   });
  }
}
