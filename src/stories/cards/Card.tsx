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
};

const StyledCard = styled.div<Props>`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  &[data-variant='primary'] {
    background: ${(props) => props.theme.backgroundColors.backgroundColor6};
    border: 1px solid ${(props) => props.theme.borderColors.borderColor5};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    &[data-orientation='horizontal'],
    &[data-orientation='horizontal-reverse'] {
      min-height: 450px;
    }

    &[data-orientation='horizontal-reverse'] {
      flex-direction: row-reverse;
    }

    &[data-orientation='vertical'] {
      flex-direction: column;
    }
  }
`;

StyledCard.displayName = 'div';

type StyledCardProps = React.ComponentProps<typeof StyledCard>;

const Card: React.FC<StyledCardProps> = ({
  children,
  orientation = 'horizontal',
  variant = 'primary',
  ...props
}) => {
  const childrenWithProps = React.Children.map(
    children,
    (child: React.ReactElement) => {
      if (child) {
        return React.cloneElement(child, {
          orientation,
          variant,
        });
      }

      return null;
    },
  );

  return (
    <StyledCard
      data-orientation={orientation}
      data-variant={variant}
      {...props}
    >
      {childrenWithProps}
    </StyledCard>
  );
};

export { Card };
export type { Props };
