import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../shared/youtube.service';

@Component({
  selector: 'app-youtube-list',
  templateUrl: './youtube-list.component.html',
  styleUrls: ['./youtube-list.component.css']
})
export class YoutubeListComponent implements OnInit {
  typedValue: string
  constructor(private youtubeService: YoutubeService) { }

  ngOnInit() {
  }

  test(event): void {
    this.youtubeService.listVideos(this.typedValue)
      .subscribe((resp) => {
        console.log(resp)
      }, (err) => {
        alert(err.message);
      });
  }
  ;
  

   onRemoveTag(e) {
  console.log(e, e.detail);
}

onAddTag(e) {
  console.log(e, e.detail);
}
}
