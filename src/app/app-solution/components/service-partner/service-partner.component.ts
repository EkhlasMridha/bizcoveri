import { Component, OnInit } from '@angular/core';
import { BizCardModel } from '@modules/biz-card/model/biz-card.model';
import { ChipModel } from '@modules/chip-module/models/chip.model';
import { ChipData } from '../../configs/chip.config';
import { SolutionService } from '../../services/solution.service';

@Component({
  selector: 'app-service-partner',
  templateUrl: './service-partner.component.html',
  styleUrls: ['./service-partner.component.scss']
})
export class ServicePartnerComponent implements OnInit {
  chips: ChipModel[];

  cardList: Partial<BizCardModel>[] = [
    {
      name: "Finance Company Pvt. Ltd.",
      location: "New Delhi, India",
      web: "www.fynav.com"
    },
  ];
  constructor (private solutionService: SolutionService) {
  }

  ngOnInit(): void {
    this.chips = this.solutionService.filterListByUserType<ChipModel>(ChipData);
  }

}
