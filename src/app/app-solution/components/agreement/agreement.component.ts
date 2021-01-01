import { Component, OnInit } from '@angular/core';
import { ChipModel } from '@modules/chip-module/models/chip.model';
import { ChipData } from '../../configs/chip.config';
import { SolutionService } from '../../services/solution.service';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.scss']
})
export class AgreementComponent implements OnInit {
  chips: ChipModel[];
  constructor (private solutionService: SolutionService) { }

  ngOnInit(): void {
    this.chips = this.solutionService.filterListByUserType<ChipModel>(ChipData);
  }

}
