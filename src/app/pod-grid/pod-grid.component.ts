import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pod-grid',
  templateUrl: './pod-grid.component.html',
  styleUrls: ['./pod-grid.component.scss']
})
export class PodGridComponent implements OnInit {

  shows = [
    {
      title: '99% Invisible',
      url: 'https://99percentinvisible.org/',
      image: 'https://image.simplecastcdn.com/images/3bb687/3bb687b0-04af-4257-90f1-39eef4e631b6/6131ce7e-b2a3-4508-a07c-d9516c0e4bb4/3000x3000/99-25-invisible-logo-1.jpg?aid=rss_feed',
      description: 'Design is everywhere in our lives, perhaps most importantly in the places where we\'ve just stopped noticing. 99% Invisible is a weekly exploration of the process and power of design and architecture. From award winning producer Roman Mars. Learn more at 99percentinvisible.org.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
