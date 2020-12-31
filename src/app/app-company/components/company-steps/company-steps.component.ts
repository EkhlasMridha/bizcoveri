import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from '@core/services/core.service';
import { StepConfig } from '../../configs/step.config';
import { StepModel } from '../../configs/step.model';

@Component({
  selector: 'company-steps',
  templateUrl: './company-steps.component.html',
  styleUrls: ['./company-steps.component.scss']
})
export class CompanyStepsComponent implements OnInit {
  userType: string;
  step: number;
  stepList: StepModel[];

  constructor (private coreService: CoreService, private route: ActivatedRoute) {
    this.coreService.iconService.loadIcons(["team"]);
    this.userType = localStorage.getItem("userType");
  }

  ngOnInit(): void {
    this.stepList = this.filterSteps(StepConfig);
    this.step = this.stepHandler(this.route, this.stepList);
  }

  stepHandler(route: ActivatedRoute, stepList: StepModel[]): number {
    let param = parseInt(route.snapshot.queryParams.step);

    if (param == -1) {
      return stepList.length - 1;
    } else if (param) {
      if (param > stepList.length - 1) {
        return stepList.length - 1;
      }
      return param;
    }
    return 0;
  }

  filterSteps(stepList: StepModel[]) {
    let filterData: StepModel[] = stepList.filter(step => {
      if (step.userType == "shared" || step.userType == this.userType.toLocaleLowerCase()) {
        return step;
      }
    });
    return filterData;
  }

  isVendor(): boolean {
    if (this.userType == 'VENDOR') {
      return true;
    } else {
      return false;
    }
  }
}
