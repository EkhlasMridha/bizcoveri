import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("../app-authentication/app-authentication.module").then(m => m.AppAuthenticationModule)
  },
  {
    path: 'landing',
    loadChildren: () => import("../app-landing/app-landing.module").then(m => m.AppLandingModule)
  },
  {
    path: "why-bizcovery",
    loadChildren: () => import("../app-why/app-why.module").then(m => m.AppWhyModule)
  },
  {
    path: "about",
    loadChildren: () => import("../app-about/app-about.module").then(m => m.AppAboutModule)
  },
  {
    path: '**',
    loadChildren: () => import("../app-tools/app-not-found/app-not-found.module").then(m => m.AppNotFoundModule),
    data: {
      breadCrumb: '404',
    },
  },
];

export function getFullPageLayoutRoute() {
  return routes;
}
