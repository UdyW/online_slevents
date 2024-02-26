import React, { forwardRef } from 'react';
import { Theme, useThemeFallback } from '../../theming';
import styled from 'styled-components';

type Props = React.HTMLProps<HTMLLabelElement> & {
  id: string;
  label: string;
  theme?: Theme;
};

const StyledLabel = styled.label`
  display: inline-block;
  font-weight: bold;
  font-size: ${(p) => p.theme.fontSizes.md};
`;

const Label: React.FC<Props> = forwardRef(
  ({ id, label, as, ref, theme: propsTheme, ...props }, forwardedRef) => {
    const theme = useThemeFallback(propsTheme);

    return (
      <StyledLabel
        id={`${id}-label`}
        htmlFor={id}
        className="label"
        ref={forwardedRef}
        theme={theme}
        {...props}
      >
        {label}
      </StyledLabel>
    );
  },
);

Label.displayName = 'Label';

export { Label };
