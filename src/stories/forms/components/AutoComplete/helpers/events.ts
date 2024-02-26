import React from 'react';

const onBlur = (
  event: React.FocusEvent,
  setIsDropdownOpen: (value: boolean) => void,
  onBlurHandle?: (event: React.FocusEvent) => void,
) => {
  if (onBlurHandle) onBlurHandle(event);

  setIsDropdownOpen(false);
};

const onChange = (
  event: React.FormEvent,
  setSearchText: (value: string) => void,
  setIsDropdownOpen: (value: boolean) => void,
  onChangeHandle?: (event: React.FormEvent) => void,
  isDropdownOpen?: boolean,
) => {
  if (onChangeHandle) onChangeHandle(event);

  const { value } = event.target as HTMLInputElement;

  setSearchText(value);

  if (!isDropdownOpen) setIsDropdownOpen(true);
};

const onFocus = (
  event: React.FocusEvent,
  setIsDropdownOpen: (value: boolean) => void,
  onFocusHandle?: (event: React.FocusEvent) => void,
) => {
  if (onFocusHandle) onFocusHandle(event);

  setIsDropdownOpen(true);
};

const onKeyDown = (
  event: React.KeyboardEvent,
  focusedOptionIndex: number,
  combinedOptions: string[],
  focusedOption: string,
  searchText: string,
  setFocusedOptionIndex: (index: number) => void,
  setSearchText: (value: string) => void,
  setIsDropdownOpen: (value: boolean) => void,
  onKeyDownHandle?: (event: React.KeyboardEvent) => void,
) => {
  if (onKeyDownHandle) onKeyDownHandle(event);

  let newIndex = focusedOptionIndex;

  if (event.code === 'ArrowUp') {
    newIndex =
      focusedOptionIndex === 0
        ? combinedOptions.length - 1
        : focusedOptionIndex - 1;
    setFocusedOptionIndex(newIndex);
  }
  if (event.code === 'ArrowDown') {
    newIndex =
      focusedOptionIndex === combinedOptions.length - 1
        ? 0
        : focusedOptionIndex + 1;
    setFocusedOptionIndex(newIndex);

    if (searchText === '') setIsDropdownOpen(true);
  }
  if (event.code === 'Enter') {
    setSearchText(focusedOption);
    setIsDropdownOpen(false);
  }
};

const onSelect = (
  option: string,
  setSearchText: (value: string) => void,
  setIsDropdownOpen: (value: boolean) => void,
  onOptionSelect?: (option: string) => void,
) => {
  if (onOptionSelect) onOptionSelect(option);

  setSearchText(option);
  setIsDropdownOpen(false);
};

export default {
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  onSelect,
};
