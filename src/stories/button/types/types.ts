type Variant = 'link' | 'primary' | 'secondary' | 'marketing';

type BaseProps<T> = React.HTMLProps<T> & {
  className?: string;
  icon?: React.ReactElement;
  loading?: boolean;
  text?: string;
  variant?: Variant;
};

type AnchorProps = BaseProps<HTMLAnchorElement> & {
  element?: 'a';
  href: string;
};

type ButtonProps = BaseProps<HTMLButtonElement> & {
  element?: 'button';
  href?: never;
};

type Props = AnchorProps | ButtonProps;

export type { Props };
