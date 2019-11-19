import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ats-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  images: Array<string>;
  constructor() { }

  ngOnInit() {
    this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  }

}
