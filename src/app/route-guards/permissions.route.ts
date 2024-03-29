const authRoutes: string[] = [
  '/dashboard',
  '/dashboard/create-project',
  '/dashboard/project-finalize',
  '/dashboard/pay-fee',
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
  '/biz-solution/project/qa',
  '/biz-solution/project/proposals',
  '/biz-solution/project/agreement',
  '/biz-solution/feedback'
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
