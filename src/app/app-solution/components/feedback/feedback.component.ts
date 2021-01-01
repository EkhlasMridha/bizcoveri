import { Component, OnInit } from '@angular/core';
import { FeedbackModel } from '../../models/feedback.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedBackList: FeedbackModel[] = [
    {
      type: "Competence of Resource",
      description: "Knowledge, Past project experience, Market awarness",
      rating: 3
    },
    {
      type: "Timeliness of Deliverables",
      rating: 4
    }
  ];
  constructor () { }

  ngOnInit(): void {
  }

}
