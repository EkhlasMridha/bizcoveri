import { Component, OnInit } from '@angular/core';
import { ChipModel } from '@modules/chip-module/models/chip.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  chips: ChipModel[] = [
    {
      title: "RFP Submitted",
      status: "accent"
    },
    {
      title: "Request proposal",
      status: "accent"
    },
    {
      title: "Proposal Receipt",
      status: "accent"
    },
    {
      title: "Select Service Provider",
      status: "accent"
    },
    {
      title: "Execute Agreement",
      status: "primary"
    },
  ];
  constructor () { }

  ngOnInit(): void {
  }

}
