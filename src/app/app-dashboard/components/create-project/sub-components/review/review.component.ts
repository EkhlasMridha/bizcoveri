import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  editCompany: boolean;
  constructor () { }

  ngOnInit(): void {
  }

}
