import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionComponent } from './components/solution/solution.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedMaterialModule } from "@material/shared-material.module";
import { TopToolbarModule } from "@modules/top-toolbar/top-toolbar.module";
import { ProjectDescriptionComponent } from './components/project-description/project-description.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { FormsMaterialModule } from '@material/forms-material.module';
import { AuthGuardService } from '@route-guard/auth-guard';
import { ProjectRolesComponent } from './components/project-roles/project-roles.component';
import { ChildToolbarComponent } from './components/child-toolbar/child-toolbar.component';
import { ChipModuleModule } from '@modules/chip-module/chip-module.module';
import { ServicePartnerComponent } from './components/service-partner/service-partner.component';
import { BizCardModule } from '@modules/biz-card/biz-card.module';
import { QuesAnsComponent } from './components/ques-ans/ques-ans.component';
import { ProposalsComponent } from './components/proposals/proposals.component';
import { MatListModule } from '@angular/material/list';
import { AgreementComponent } from './components/agreement/agreement.component';
import { RootlineDialogModule } from '@rootline-dialog';

const projectChild: Routes = [
  {
    path: '',
    redirectTo: 'detail',
    pathMatch: "full"
  },
  {
    path: 'detail',
    component: ProjectDetailsComponent,
    data: {
      breadCrumb: "Project detail"
    }
  },
  {
    path: "project-roles",
    component: ProjectRolesComponent,
    data: {
      breadCrumb: "Project Roles & Users"
    }
  },
  {
    path: "service-partner",
    component: ServicePartnerComponent,
    data: {
      breadCrumb: "Service Partner"
    }
  },
  {
    path: "qa",
    component: QuesAnsComponent,
    data: {
      breadCrumb: "Q & A"
    }
  },
  {
    path: "proposals",
    component: ProposalsComponent,
    data: {
      breadCrumb: "Proposals"
    }
  },
  {
    path: "agreement",
    component: AgreementComponent,
    data: {
      breadCrumb: "Agreement"
    }
  }
];

const routes: Routes = [
  {
    path: '',
    component: SolutionComponent,
    data: {
      breadCrumb: "Solution"
    }
  },
  {
    path: 'project',
    component: ProjectDescriptionComponent,
    data: {
      breadCrumb: "Project"
    },
    canActivateChild: [AuthGuardService],
    children: projectChild
  }
];

@NgModule({
  declarations: [SolutionComponent, ProjectDescriptionComponent, ProjectDetailsComponent, ProjectRolesComponent, ChildToolbarComponent, ServicePartnerComponent, QuesAnsComponent, ProposalsComponent, AgreementComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TopToolbarModule,
    SharedMaterialModule,
    FormsMaterialModule,
    ChipModuleModule,
    BizCardModule,
    MatListModule,
    RootlineDialogModule.forChild({
      modalWidth: "500px"
    })
  ]
})
export class AppSolutionModule { }
