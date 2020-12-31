import { Component, OnInit } from '@angular/core';
import { ChipModel } from '@modules/chip-module/models/chip.model';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.scss']
})
export class AgreementComponent implements OnInit {
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
