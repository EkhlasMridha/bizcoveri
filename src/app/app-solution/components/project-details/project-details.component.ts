import { Component, OnInit } from '@angular/core';
import { ChipsModel } from '../../models/chips.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  chipList: ChipsModel[] = [
    {
      title: "RFP Submitted",
      type: "accent"
    },
    {
      title: "Request proposal",
      type: "accent"
    },
    {
      title: "Proposal Receipt",
      type: "accent"
    },
    {
      title: "Select Service Provider",
      type: "accent"
    },
    {
      title: "Execute Agreement",
      type: "primary"
    },
  ];
  constructor () { }

  ngOnInit(): void {
  }

}
