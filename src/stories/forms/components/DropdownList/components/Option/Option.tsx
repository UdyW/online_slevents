import React from 'react';
import styled from 'styled-components';

interface OptionProps {
  option: string;
  onSelect: (option: string) => void;
  selectedOption?: string;
  focusedOption?: string;
}

interface StyledOptionProps {
  isFocused: boolean;
}

const StyledOption = styled.li<StyledOptionProps>`
  padding: ${(props) => props.theme.spacing.xs};
  background-color: ${(props) =>
    props.isFocused
      ? props.theme.backgroundColors.backgroundColor7
      : 'transparent'};

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.theme.backgroundColors.backgroundColor7};
  }
`;

const Option: React.FC<OptionProps> = (props) => {
  const { option, selectedOption, focusedOption, onSelect } = props;

  return (
    <StyledOption
      aria-label={option}
      aria-selected={
        selectedOption && selectedOption === option ? 'true' : 'false'
      }
      role="option"
      onClick={() => onSelect(option)}
      isFocused={focusedOption && focusedOption === option}
    >
      {option}
    </StyledOption>
  );
};

export default Option;
