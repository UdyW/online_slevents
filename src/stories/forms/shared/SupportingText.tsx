import React, { ReactNode } from 'react';
import { Theme, useThemeFallback } from '../../theming';
import styled from 'styled-components';

type Props = {
  content: ReactNode;
  theme?: Theme;
  position?: 'top' | 'bottom';
};

const StyledSupportingText = styled.div`
  font-size: ${(p) => p.theme.fontSizes.sm};

  &.supporting-text--top {
    margin: 2px 0;
  }

  &.supporting-text--bottom {
    margin: ${(p) => p.theme.spacing.xs2} 0 0;
  }
`;

const SupportingText: React.FC<Props> = ({
  content,
  theme: propsTheme,
  position = 'top',
}) => {
  const theme = useThemeFallback(propsTheme);

  return (
    <StyledSupportingText
      className={`supporting-text supporting-text--${position}`}
      theme={theme}
    >
      {content}
    </StyledSupportingText>
  );
};

export { SupportingText };
