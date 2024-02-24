type FontSizes = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xl2: string;
  xl3: string;
  xl4: string;
  xl5: string;
  xl6: string;
};

const fontSizes: FontSizes = {
  /** <760px = 14px, >761px = 15px */
  xs: '0.772rem',
  /** <760px = 16px, >761px = 18px */
  sm: '0.878rem',
  /** <760px = 18px, >761px = 20px */
  md: '1rem',
  /** <760px = 20px, >761px = 23px */
  lg: '1.138rem',
  /** <760px = 23px, >761px = 26px */
  xl: '1.296rem',
  /** <760px = 27px, >761px = 30px */
  xl2: '1.476rem',
  /** <760px = 30px, >761px = 34px */
  xl3: '1.68rem',
  /** <760px = 34px, >761px = 38px */
  xl4: '1.913rem',
  /** <760px = 39px, >761px = 44px */
  xl5: '2.178rem',
  /** <760px = 45px, >761px = 15px */
  xl6: '2.479rem',
};

export { fontSizes };
export type { FontSizes };
