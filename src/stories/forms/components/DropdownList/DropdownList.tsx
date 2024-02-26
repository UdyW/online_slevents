import React from 'react';
import { Theme } from '../../theming';
import styled from 'styled-components';
import { validateOptions } from './utils';
import { Option } from './components';

interface DropdownProps {
  isDropdownOpen: boolean;
  featuredOptions?: string[];
  onSelect: (option: string) => void;
  options: string[];
  theme: Theme;
  listId: string;
  searchText?: string;
  selectedOption?: string;
  hasSupportingText: boolean;
  focusedOption?: string;
}

interface StyledDropdownProps {
  isDropdownOpen: boolean;
  theme: Theme;
  hasSupportingText: boolean;
}

const StyledDropdown = styled.ul<StyledDropdownProps>`
  display: ${(props) => (props.isDropdownOpen ? 'block' : 'none')};
  position: absolute;
  background-color: ${(props) => props.theme.backgroundColors.backgroundColor6};
  box-shadow: 0 0 2px 2px ${(props) => props.theme.borderColors.borderColor5};
  padding: 0;
  margin-top: ${(props) =>
    props.hasSupportingText ? `calc(${props.theme.fontSizes.sm} * -1.5)` : 0};
  width: 100%;
  max-height: 320px;
  overflow-y: scroll;
  z-index: 1024;
  overflow-scrolling: touch;
`;

export const DropdownList: React.FC<DropdownProps> = (props) => {
  const {
    options,
    featuredOptions,
    isDropdownOpen,
    listId,
    onSelect,
    searchText,
    selectedOption,
    hasSupportingText,
    focusedOption,
  } = props;

  return (
    <StyledDropdown
      id={listId}
      role="listbox"
      aria-labelledby={listId}
      isDropdownOpen={isDropdownOpen}
      hasSupportingText={hasSupportingText}
    >
      {searchText && (
        <React.Fragment>
          <Option
            key={searchText}
            option={searchText}
            onSelect={onSelect}
            selectedOption={selectedOption}
            focusedOption={focusedOption}
          />
          <hr />
        </React.Fragment>
      )}

      {validateOptions(featuredOptions) && (
        <React.Fragment>
          {featuredOptions.map((featuredOption) => (
            <Option
              key={featuredOption}
              option={featuredOption}
              onSelect={onSelect}
              selectedOption={selectedOption}
              focusedOption={focusedOption}
            />
          ))}
          <hr />
        </React.Fragment>
      )}

      {validateOptions(options) &&
        options.map((option) => (
          <Option
            key={option}
            option={option}
            onSelect={onSelect}
            selectedOption={option}
            focusedOption={focusedOption}
          />
        ))}
    </StyledDropdown>
  );
};
