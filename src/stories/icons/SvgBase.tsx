import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: string;
  classes?: string;
  viewBox?: string;
};

const SvgBase: React.FC<IconProps> = ({
  size = '30',
  color = 'currentColor',
  classes = '',
  viewBox = '0 0 30 30',
  children,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    viewBox={viewBox}
    className={`${color} ${classes}`}
    {...props}
  >
    <rect width="100%" height="100%" fill="none" />
    {children}
  </svg>
);

const withSvgBase =
  (Component: React.FC, viewBox?: string): React.FC<IconProps> =>
  /* eslint-disable react/display-name */
  (props) => (
    <SvgBase viewBox={viewBox} {...props}>
      <Component />
    </SvgBase>
  );

export { withSvgBase };
