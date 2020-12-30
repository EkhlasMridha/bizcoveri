import { Component, OnInit } from '@angular/core';
import { NavigationModel } from 'src/app/contracts/navigation.model';
import { authpageNavigation, customToolbarNavigation } from 'src/app/shared-modules/navigations/customtoolbar.nav';
import { CoreService } from '@core/core-service';
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
  isLoggedIn: boolean = false;

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

  workflowList: Partial<TutorialModel>[] = [
    {
      localIcon: "meeting",
      title: "Schedule Meeting",
      route: "/meetings"
    },
    {
      localIcon: "qa",
      title: "Q & A",
      route: "/qa"
    },
    {
      localIcon: "team",
      title: "Manage Teams",
      route: "/manage-team"
    }
  ];
  closeProjectList: Partial<TutorialModel>[] = [
    {
      localIcon: "feedback",
      title: "Feedback",
      route: "feedback"
    }
  ];
  constructor (private coreService: CoreService) {
    this.coreService.iconService.loadIcons(['progress', 'qa', 'team', 'meeting', 'feedback', 'deliver', 'payments']);
    this.isLoggedIn = this.coreService.tokenService.hasToken();
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
