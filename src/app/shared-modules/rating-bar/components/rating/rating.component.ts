import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CoreService } from '@core/services/core.service';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  private _rating: number = 3;
  private _ratingStore: number = this._rating;
  @Input()
  get rating(): number {
    return this._rating;
  }
  set rating(value: number) {
    this._rating = value;
  }
  totalStar: number = 5;

  constructor (private coreService: CoreService) {
    this.coreService.iconService.loadIcons(["star"]);
  }

  ngOnInit(): void {

  }

  getStarArray(s: number) {
    return Array(s);
  }

  hoverRating(rating) {
    this.rating = rating;
  }

  resetRating(reset) {
    this.rating = this._ratingStore;
  }

  setRating(rating: number) {
    this.rating = rating;
    this._ratingStore = rating;
  }
}
