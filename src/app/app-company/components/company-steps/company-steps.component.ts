import { Component, OnInit } from '@angular/core';
import { CoreService } from '@core/services/core.service';

@Component({
  selector: 'company-steps',
  templateUrl: './company-steps.component.html',
  styleUrls: ['./company-steps.component.scss']
})
export class CompanyStepsComponent implements OnInit {

  constructor (private coreService: CoreService) {
    this.coreService.iconService.loadIcons(["team"]);
  }

  ngOnInit(): void {
  }

}
