import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StepModel } from '@contracts/step.model';
import { ProjectSteps } from '../../configs/project-step.config';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  isLinear = true;
  stepNumber: number = 4;
  userType: string;
  stepList: StepModel[];
  constructor (private route: ActivatedRoute) {
    this.userType = localStorage.getItem("userType");
  }

  ngOnInit(): void {
    this.stepList = this.filterProjectStep(ProjectSteps);
    this.stepNumber = this.stepHandler(this.route, this.stepList);
  }

  filterProjectStep(stepList: StepModel[]) {
    let data = stepList.filter(step => {
      if (step.userType == "shared" || step.userType == this.userType.toLocaleLowerCase()) {
        return step;
      }
    });

    return data;
  }

  stepHandler(route: ActivatedRoute, stepList: StepModel[]): number {
    let param = parseInt(route.snapshot.queryParams.p_step);

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
}
