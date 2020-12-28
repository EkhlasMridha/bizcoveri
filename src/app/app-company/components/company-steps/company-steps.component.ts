import { Component, OnInit } from '@angular/core';
import { CoreService } from '@core/services/core.service';

@Component({
  selector: 'company-steps',
  templateUrl: './company-steps.component.html',
  styleUrls: ['./company-steps.component.scss']
})
export class CompanyStepsComponent implements OnInit {
  userType: string;
  constructor (private coreService: CoreService) {
    this.coreService.iconService.loadIcons(["team"]);
    this.userType = localStorage.getItem("userType");
  }

  ngOnInit(): void {
  }

  isVendor(): boolean {
    if (this.userType == 'VENDOR') {
      return true;
    } else {
      return false;
    }
  }
}
