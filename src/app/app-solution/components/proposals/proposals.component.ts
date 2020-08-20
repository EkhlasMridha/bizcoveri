import { Component, OnInit } from '@angular/core';
import { ChipModel } from '@modules/chip-module/models/chip.model';
import { RootlineDialogService } from '@rootline-dialog';
import { ChipData } from '../../configs/chip.config';
import { SolutionService } from '../../services/solution.service';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent implements OnInit {
  chips: ChipModel[];
  vendorList: string[] = ["Vendor 1", "Vendor 2"];
  userType: string;
  checked: boolean = false;
  constructor (private rootlineDialog: RootlineDialogService, private solutionService: SolutionService) {
    this.userType = localStorage.getItem("userType");
  }

  ngOnInit(): void {
    this.primaryButton.bind(this);
    this.chips = this.solutionService.filterListByUserType<ChipModel>(ChipData);
  }

  acceptProposal() {
    this.rootlineDialog.openConfirmationModal({
      type: "success",
      color: "primary",
      matIcon: "check_circle",
      headerText: "Thank you! Your request has been sent to the service parnter",
      description: "The Service partner will soon share the agreement for your review",
      primaryButtonName: "Ok",
      primaryEvent: this.primaryButton
    });
  }

  primaryButton(event) {
    console.log("Ok");
  }

  submitProposal() {
    this.rootlineDialog.openConfirmationModal({
      type: "success",
      color: "primary",
      matIcon: "check_circle",
      headerText: "Thank you! Your proposal has been submitted",
      description: "Please wait for the company to respond to your proposal",
      primaryButtonName: "Ok",
      primaryEvent: this.primaryButton
    });
  }
}
