import { Component, OnInit } from '@angular/core';
import { ChipModel } from '@modules/chip-module/models/chip.model';

@Component({
  selector: 'app-ques-ans',
  templateUrl: './ques-ans.component.html',
  styleUrls: ['./ques-ans.component.scss']
})
export class QuesAnsComponent implements OnInit {
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
