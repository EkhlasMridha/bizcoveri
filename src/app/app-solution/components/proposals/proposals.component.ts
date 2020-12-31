import { Component, OnInit } from '@angular/core';
import { ChipModel } from '@modules/chip-module/models/chip.model';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent implements OnInit {
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
  vendorList: string[] = ["Vendor 1", "Vendor 2"];
  constructor () { }

  ngOnInit(): void {
  }

}
