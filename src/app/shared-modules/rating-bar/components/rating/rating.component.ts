import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CoreService } from '@core/services/core.service';
import { coerceBooleanProperty } from "@angular/cdk/coercion";

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RatingComponent,
      multi: true
    }
  ]
})
export class RatingComponent implements ControlValueAccessor {
  private _rating: number = -1;
  private _ratingStore: number = this._rating;
  private _fixed: boolean;
  @Input()
  get fixed() {
    return this._fixed;
  }
  set fixed(value) {
    this._fixed = coerceBooleanProperty(value);
  }
  @Input()
  get rating(): number {
    return this._rating;
  }
  set rating(value: number) {
    this._rating = value;
  }

  totalStar: number = 5;
  disabled: boolean = false;

  constructor (private coreService: CoreService) {
    this.coreService.iconService.loadIcons(["star"]);
  }

  onChange: (value: number) => void;
  onTouched: () => void;

  writeValue(rating: number): void {
    this.setRating(rating);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
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
    if (this.disabled || this.fixed) {
      return;
    }

    this.rating = rating;
    this._ratingStore = rating;
    if (this.onChange == undefined) {
      return;
    }
    this.onChange(rating);
    this.onTouched();
  }
}
