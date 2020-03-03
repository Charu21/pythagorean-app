import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  adjacentside: number;
  oppositeside: number;
  hypotenuse: number;
  calculateClicked: boolean = false;
  resetClicked: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  calculateHypotenuse() {
    this.hypotenuse = Math.hypot(this.oppositeside, this.adjacentside);
    this.calculateClicked = true;
  }

  reset() {
    this.resetClicked = true;
    this.adjacentside = null;
    this.hypotenuse = null;
    this.oppositeside = null;
  }

}
