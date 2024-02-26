import React from 'react';
import { Theme } from '../../theming';
import { TextField, Props as TextFieldProps } from '../TextField';
import { DropdownList } from '../DropdownList/DropdownList';
import { useOptions } from '../DropdownList/hooks';
import { events } from './helpers';

interface AutoCompleteProps extends TextFieldProps {
  id: string;
  options: string[];
  featuredOptions?: string[];
  sortOptions?: boolean;
  theme: Theme;
  onOptionSelect: (option: string) => void;
}

const AutoComplete: React.FC<AutoCompleteProps> = React.forwardRef(
  (props, forwardedRef) => {
    const {
      id,
      options,
      featuredOptions,
      sortOptions = false,
      theme,
      supportingText,
      onOptionSelect,
    } = props;

    const [isDropdownOpen, setIsDropdownOpen] = React.useState(true);
    const [searchText, setSearchText] = React.useState('');
    const [focusedOptionIndex, setFocusedOptionIndex] = React.useState(0);
    const { processedOptions, combinedOptions, optionsValid } = useOptions({
      options,
      featuredOptions,
      sortOptions,
      searchText,
    });

    const listId = `${id}-list`;
    const focusedOption = combinedOptions[focusedOptionIndex];

    return (
      <div style={{ position: 'relative' }}>
        <TextField
          id={id}
          list={listId}
          name={id}
          ref={forwardedRef}
          value={searchText}
          autoComplete="off"
          {...props}
          onBlur={(event) =>
            events.onBlur(event, setIsDropdownOpen, props.onBlur)
          }
          onChange={(event) =>
            events.onChange(
              event,
              setSearchText,
              setIsDropdownOpen,
              props.onChange,
              isDropdownOpen,
            )
          }
          onFocus={(event) =>
            events.onFocus(event, setIsDropdownOpen, props.onFocus)
          }
          onKeyDown={(event) =>
            events.onKeyDown(
              event,
              focusedOptionIndex,
              combinedOptions,
              focusedOption,
              searchText,
              setFocusedOptionIndex,
              setSearchText,
              setIsDropdownOpen,
              props.onKeyDown,
            )
          }
        />

        {optionsValid && (
          <DropdownList
            isDropdownOpen={isDropdownOpen}
            options={processedOptions}
            featuredOptions={featuredOptions}
            theme={theme}
            listId={listId}
            onSelect={(option: string) =>
              events.onSelect(
                option,
                setSearchText,
                setIsDropdownOpen,
                onOptionSelect,
              )
            }
            searchText={searchText}
            hasSupportingText={supportingText && supportingText !== ''}
            focusedOption={focusedOption}
          />
        )}
      </div>
    );
  },
);

AutoComplete.displayName = 'AutoComplete';

export { AutoComplete, AutoCompleteProps };
