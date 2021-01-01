import { Component, OnInit } from '@angular/core';
import { CoreService } from '@core/services/core.service';

@Component({
  selector: 'app-pay-fee',
  templateUrl: './pay-fee.component.html',
  styleUrls: ['./pay-fee.component.scss']
})
export class PayFeeComponent implements OnInit {
  chipList: string[] = ["Pay by net banking", "Pay by card", "Pay by coin"];
  constructor (private coreService: CoreService) {
    this.coreService.iconService.loadIcons(["credit-card", "paypal", "mastercard", "visa"]);
  }

  ngOnInit(): void {
  }

}
