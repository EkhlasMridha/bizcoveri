import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'step-review',
  templateUrl: './step-review.component.html',
  styleUrls: ['./step-review.component.scss']
})
export class StepReviewComponent implements OnInit {
  constructor () { }

  ngOnInit(): void {
  }

  isVendor() {
    let type = localStorage.getItem("userType");
    if (type == 'VENDOR') {
      return true;
    }
    return false;
  }
}
