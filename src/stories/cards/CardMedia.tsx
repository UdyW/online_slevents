import React from 'react';
import { Theme } from '../theming/theme';
import styled from 'styled-components';

type Props = React.HTMLProps<HTMLDivElement> & {
  orientation?:
    | 'horizontal'
    | 'horizontal-reverse'
    | 'vertical'
    | 'vertical-feature';
  theme: Theme;
  children: React.ReactNode;
};

const StyledCardMedia = styled.div<Props>`
  order: -1;
  position: relative;
  z-index: 1;
  width: 100%;
  max-height: 450px;
  overflow: hidden;

  &:after {
    display: block;
    width: 100%;
    padding-bottom: 100%;
    content: '';
  }

  &[data-orientation='vertical-feature'] {
    max-height: 300px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    &[data-orientation='horizontal'],
    &[data-orientation='horizontal-reverse'] {
      order: 0;
      width: 50%;
      min-height: inherit;
      max-height: 100%;

      &:after {
        content: none;
      }
    }

    &[data-orientation='vertical-feature'] {
      max-height: 405px;
    }
  }
`;

StyledCardMedia.displayName = 'div';

type StyledCardMediaProps = React.ComponentProps<typeof StyledCardMedia>;

const CardMedia: React.FC<StyledCardMediaProps> = ({
  children,
  orientation = 'horizontal',
  ...props
}) => (
  <StyledCardMedia data-orientation={orientation} {...props}>
    {children}
  </StyledCardMedia>
);

export { CardMedia };
export type { Props };
