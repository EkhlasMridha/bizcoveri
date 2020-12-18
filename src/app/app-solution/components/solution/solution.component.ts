import { Component, OnInit } from '@angular/core';
import { NavigationModel } from 'src/app/contracts/navigation.model';
import { ServiceTypeModel } from 'src/app/contracts/servicetype.model';
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
  proposalList: any[] = [
    {
      name: "Proposal 1",
      isSelected: true,
    },
    {
      name: "Proposal 2",
      isSelected: false,
    },
    {
      name: "Proposal 3",
      isSelected: false,
    },
  ];
  tutorialList: TutorialModel[] = [
    {
      title: "Define",
      subTitle: "Describe your needs in a well defined template"
    },
    {
      title: "Discover",
      subTitle: "Find the best partner for your needs"
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

  workflowList: Partial<ServiceTypeModel>[] = [
    {
      localIcon: "meeting",
      title: "Schedule Meeting"
    },
    {
      localIcon: "qa",
      title: "Q & A"
    },
    {
      localIcon: "team",
      title: "Manage Teams"
    },
    {
      localIcon: "progress",
      title: "Track Progress"
    }
  ];
  closeProjectList: Partial<ServiceTypeModel>[] = [
    {
      localIcon: "deliver",
      title: "Project Deliverables"
    },
    {
      localIcon: "payments",
      title: "Payments"
    },
    {
      localIcon: "feedback",
      title: "Feedback"
    }
  ];
  constructor (private iconService: IconService) {
    this.iconService.loadIcons(['progress', 'qa', 'team', 'meeting', 'feedback', 'deliver', 'payments']);
  }

  ngOnInit(): void {
  }

  selectProposal(proposal: any) {
    this.proposalList.forEach(p => {
      p.isSelected = false;
    });
    proposal.isSelected = true;
  }
}
