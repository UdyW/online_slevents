type Spacing = {
  xs3: string;
  xs2: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xl2: string;
  xl3: string;
  xl4: string;
  xl5: string;
};

const spacing: Spacing = {
  /** <760px = 4px, >761px = 4px */
  xs3: '0.211rem',
  /** <760px = 6px, >761px = 6px */
  xs2: '0.311rem',
  /** <760px = 8px, >761px = 9px */
  xs: '0.459rem',
  /** <760px = 12px, >761px = 14px */
  sm: '0.678rem',
  /** <760px = 18px, >761px = 20px */
  md: '1rem',
  /** <760px = 27px, >761px = 30px */
  lg: '1.476rem',
  /** <760px = 39px, >761px = 44px */
  xl: '2.178rem',
  /** <760px = 58px, >761px = 76px */
  xl2: '3.213rem',
  /** <760px = 85px, >761px = 95px */
  xl3: '4.742rem',
  /** <760px = 126px, >761px = 140px */
  xl4: '6.997rem',
  /** <760px = 186px, >761px = 207px */
  xl5: '10.326rem',
};

export { spacing, Spacing };
