export type MenuItem = {
  name: string;
  url: string;
  customClassName?: string;
  icon?: string;
  subMenu?: Array<MenuItem>;
  opensInNewTab?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>, url: string) => void;
};

export type MenuItemSecondary = MenuItem & {
  hasDivider?: boolean;
  showInSidebar?: boolean;
  secondaryMenuIcon?: JSX.Element;
  isPrefixIcon?: boolean;
};

export type MenuItemFeatured = {
  introText: string;
  url: string;
  linkLabel: string;
  opensInNewTab?: boolean;
};

export type GetIsActiveRoute = (route: string, url: string) => boolean;

export type MouseEventCallback = (e: React.MouseEvent<HTMLElement>) => void;

export type KeyboardEventCallback = (
  e: React.KeyboardEvent<HTMLElement>,
) => void;

export type MenuRouteProps = {
  route: string;
  currentTab?: string;
  isMenuOpen?: boolean;
  handleSidebarToggle?: MouseEventCallback;
  getIsActiveRoute?: GetIsActiveRoute;
};

export type BrandLogo = 'energy' | 'broadband';
