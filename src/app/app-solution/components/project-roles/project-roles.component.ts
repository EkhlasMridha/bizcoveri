import { Component, OnInit } from '@angular/core';
import { ChipModel } from '@modules/chip-module/models/chip.model';
import { ChipData } from '../../configs/chip.config';
import { SolutionService } from '../../services/solution.service';

@Component({
  selector: 'app-project-roles',
  templateUrl: './project-roles.component.html',
  styleUrls: ['./project-roles.component.scss']
})
export class ProjectRolesComponent implements OnInit {
  chips: ChipModel[];
  constructor (private solutionService: SolutionService) { }

  ngOnInit(): void {
    this.chips = this.solutionService.filterListByUserType(ChipData);
  }


}
