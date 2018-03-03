import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';


@Component({
  selector: 'app-morph',
  templateUrl: './morph.component.html',
  styleUrls: ['./morph.component.css']
})
export class MorphComponent implements OnInit {
  @ViewChild('videoElement') videoElement: any;
  @ViewChild('canvasElement') canvasElement: any;
  @ViewChild('resultVideoElement') resultVideoElement: any;


  video: any;
  canvas: any;
  resultVideo: any;
  videoRunning: boolean = true;
  resultVideoRunning: boolean = true;  
  isValid = true;
  hobby: string = "Surfing";

  ngOnInit() {
    this.video = this.videoElement.nativeElement;
    this.canvas = this.canvasElement.nativeElement;
    this.resultVideo = this.resultVideoElement.nativeElement;
    this.start();
  }

  constructor(private router: Router) {
  }

  start() {
    this.initCamera({ video: true, audio: false });
    this.videoRunning = true;
    this.resultVideoRunning = false;    
  }

   sound() {
    this.initCamera({ video: true, audio: true });
  }

  initCamera(config: any) {
    const browser = <any>navigator;

    browser.getUserMedia = (browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia);

    browser.mediaDevices.getUserMedia(config).then(stream => {
      this.video.src = window.URL.createObjectURL(stream);
      this.video.play();
    });
  }

  pause() {
    this.video.pause();
  }


  resume() {
    this.video.play();
  }

  snap() {
    const context = this.canvas.getContext('2d');
    context.drawImage(this.video, 0, 0, 640, 480);
    this.videoRunning = false;
    this.video.pause(); 
    this.isValid = false;
  }

  getStyle() {
    if(this.videoRunning) {
      return "elem_show";
    } else {
      return "elem_hide";
    }
  }

  getSnapStyle() {
    if(this.resultVideoRunning){
      return "elem_hide";      
    }
    else if(this.videoRunning ) {
      return "elem_hide";
    } else {
      return "elem_show";
    }
  }

  getResultStyle() {
    if(this.resultVideoRunning) {
      return "elem_show";
    } else {
      return "elem_hide";
    }
  }

  liveExtreme(){
    this.resultVideo.src = "http://127.0.0.1:8000/"+this.hobby+".mp4";
    this.resultVideo.play();
  this.resultVideoRunning = true;
  }

}
