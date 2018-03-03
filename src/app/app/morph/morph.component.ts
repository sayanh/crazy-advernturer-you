import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-morph',
  templateUrl: './morph.component.html',
  styleUrls: ['./morph.component.css']
})
export class MorphComponent implements OnInit {

  title: string
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.title = 'Crazy Adventurer You!!';
  }

}
