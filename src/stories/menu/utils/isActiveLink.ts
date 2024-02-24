import { GetIsActiveRoute } from '../types';

const isActiveLink = (
  getIsActiveRoute: GetIsActiveRoute,
  currentRoute = '',
  currentUrl = '',
  isPrimaryMenuItem?: boolean,
): boolean => {
  const url = isPrimaryMenuItem ? currentUrl.split('?')[0] : currentUrl;

  return getIsActiveRoute
    ? getIsActiveRoute(currentRoute, currentUrl)
    : url === currentRoute;
};

export { isActiveLink };
