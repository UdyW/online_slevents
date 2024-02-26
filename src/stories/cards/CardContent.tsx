import React from 'react';
import { Theme } from '../theming/theme';
import styled from 'styled-components';

type Props = React.HTMLProps<HTMLDivElement> & {
  orientation?:
    | 'horizontal'
    | 'horizontal-reverse'
    | 'vertical'
    | 'vertical-feature';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  theme: Theme;
  children: React.ReactNode;
};

const StyledCardContent = styled.div<Props>`
  width: 100%;
  padding: ${(props) => props.theme.spacing.lg}
    ${(props) => props.theme.spacing.md};
  background: ${(props) => props.theme.backgroundColors.backgroundColor6};

  .card__content {
    width: 100%;
    max-width: 620px;
    margin: 0 auto;
  }

  &[data-variant='secondary'] {
    border: 1px solid ${(props) => props.theme.borderColors.borderColor5};
  }

  &[data-variant='quaternary'] {
    background: ${(props) => props.theme.backgroundColors.backgroundColor1};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    &[data-orientation='horizontal'],
    &[data-orientation='horizontal-reverse'] {
      display: flex;
      align-items: center;
      width: 50%;
      padding: ${(props) => props.theme.spacing.lg}
        ${(props) => props.theme.spacing.xl};
    }

    &[data-orientation='vertical-feature'] {
      padding: ${(props) => props.theme.spacing.xl};
    }
  }
`;

StyledCardContent.displayName = 'div';

type StyledCardContentProps = React.ComponentProps<typeof StyledCardContent>;

const CardContent: React.FC<StyledCardContentProps> = ({
  children,
  orientation = 'horizontal',
  variant = 'primary',
  ...props
}) => (
  <StyledCardContent
    data-orientation={orientation}
    data-variant={variant}
    {...props}
  >
    <div className="card__content">{children}</div>
  </StyledCardContent>
);

export { CardContent };
export type { Props };
