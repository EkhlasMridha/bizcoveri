const authRoutes: string[] = [
  '/dashboard',
  '/dashboard/create-project',
  '/company-details',
  '/pricing',
  '/account-settings',
  '/help',
  '/notifications',
  '/meetings',
  '/biz-solution',
  '/biz-solution/project/',
  '/biz-solution/project/detail',
  '/biz-solution/project/project-roles',
  '/biz-solution/project/service-partner',
  '/biz-solution/project/qa'
];

export function isAuhtRoute(url: string) {
  let refinedRoute = getRifinedRoute(url);
  // console.log('refined url: ' + refinedRoute);
  let check = authRoutes.includes(refinedRoute);

  return check;
}

function getRifinedRoute(url: string) {
  let route = url.split('?');

  let refined = route[0];
  return refined;
}
