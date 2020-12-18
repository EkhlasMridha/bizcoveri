import { Component, OnInit } from '@angular/core';
import { NavigationModel } from 'src/app/contracts/navigation.model';
import { authpageNavigation, customToolbarNavigation } from 'src/app/shared-modules/navigations/customtoolbar.nav';
import { IconService } from 'src/app/shared-services/utilities/icon.service';
import { TutorialModel } from '../../models/tutorial.model';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss']
})
export class SolutionComponent implements OnInit {
  color: string = "#242424";
  firstNavList: NavigationModel[] = authpageNavigation;
  secondNavList: NavigationModel[] = customToolbarNavigation;

  vendorList: any = ["Vendor 1", "Vendor 2", "Vendor 3", "Vendor 4"];
  proposalList: Partial<NavigationModel>[] = [
    {
      name: "Proposal 1",
      type: "primary"
    },
    {
      name: "Proposal 2",
      type: "secondary"
    },
    {
      name: "Proposal 3",
      type: "secondary"
    },
  ];
  tutorialList: TutorialModel[] = [
    {
      title: "Define",
      subTitle: "Describe your needs in a well defined template"
    },
    {
      title: "Contract",
      subTitle: "Sign agreement with prefered partner"
    },
    {
      title: "Collaborate",
      subTitle: "Work with service partner through the project"
    },
    {
      title: "Conclude",
      subTitle: "Finish project and save repository"
    }
  ];
  constructor (private iconService: IconService) {

  }

  ngOnInit(): void {
  }

}
