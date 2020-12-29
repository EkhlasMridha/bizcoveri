import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rating-icon',
  templateUrl: './rating-icon.component.html',
  styleUrls: ['./rating-icon.component.scss']
})
export class RatingIconComponent implements OnInit {
  @Input() active: boolean;
  @Input() index: number;

  @Output() indexEmitter = new EventEmitter();
  @Output() resetRating = new EventEmitter();
  constructor () { }

  ngOnInit(): void { }

  @HostListener('mouseover') onMouseOver() {
    this.indexEmitter.emit(this.index);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.resetRating.emit();
  }
}
