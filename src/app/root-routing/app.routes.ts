import { Routes } from '@angular/router';
import { AuthGuardService } from "@route-guard/auth-guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../app-dashboard/app-dashboard.module').then(
        (module) => module.AppDashboardModule
      ),
    data: {
      breadCrumb: 'Dashboard',
    },
    canActivateChild: [AuthGuardService],
  },
  {
    path: "company-details",
    loadChildren: () => import("../app-company/app-company.module").then(m => m.AppCompanyModule),
    data: {
      breadCrumb: "Company"
    }
  },
  {
    path: 'pricing',
    loadChildren: () => import("../app-pricing/app-pricing.module").then(m => m.AppPricingModule),
    data: {
      breadCrumb: "Pricing"
    }
  },
  {
    path: "account-settings",
    loadChildren: () => import("../app-account/app-account.module").then(m => m.AppAccountModule),
    data: {
      breadCrumb: "Account settings"
    }
  },
  {
    path: "meetings",
    loadChildren: () => import("../app-meeting/app-meeting.module").then(m => m.AppMeetingModule),
    data: {
      breadCrumb: "Meetings"
    }
  },
  {
    path: "help",
    loadChildren: () => import("../app-help/app-help.module").then(m => m.AppHelpModule),
    data: {
      breadCrumb: "Help"
    }
  },
  {
    path: "notifications",
    loadChildren: () => import("../app-notifications/app-notifications.module").then(m => m.AppNotificationsModule),
    data: {
      breadCrumb: "Notifications"
    }
  },
  {
    path: 'biz-solution',
    loadChildren: () => import("../app-solution/app-solution.module").then(m => m.AppSolutionModule)
  },
];

export function getBusinessRoutes() {
  return routes;
}
