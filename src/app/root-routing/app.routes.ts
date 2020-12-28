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
  }
];

export function getBusinessRoutes() {
  return routes;
}
