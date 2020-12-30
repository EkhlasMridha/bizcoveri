import { Component, OnInit } from '@angular/core';
import { BizCardModel } from '@modules/biz-card/model/biz-card.model';
import { ChipModel } from '@modules/chip-module/models/chip.model';

@Component({
  selector: 'app-service-partner',
  templateUrl: './service-partner.component.html',
  styleUrls: ['./service-partner.component.scss']
})
export class ServicePartnerComponent implements OnInit {
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

  cardList: Partial<BizCardModel>[] = [
    {
      name: "Finance Company Pvt. Ltd.",
      location: "New Delhi, India",
      web: "www.fynav.com"
    },
  ];
  constructor () {
  }

  ngOnInit(): void {
  }

}
