import { validateOptions } from '../utils';

interface UseRegularOptionsArgs {
  options: string[];
  featuredOptions?: string[];
  searchText: string;
  sortOptions: boolean;
}

type UseRegularOptionsType = (args: UseRegularOptionsArgs) => {
  processedOptions: string[] | [];
  combinedOptions: string[] | [];
  optionsValid: boolean;
  featuredOptionsValid: boolean;
};

export const useOptions: UseRegularOptionsType = ({
  options,
  featuredOptions,
  searchText,
  sortOptions,
}) => {
  let processedOptions = options;
  let combinedOptions = options;

  const optionsValid = validateOptions(options);
  const featuredOptionsValid = validateOptions(featuredOptions);

  if (optionsValid) {
    processedOptions = processedOptions.filter(
      (value, index, array) => array.indexOf(value) === index,
    );

    if (searchText) {
      processedOptions = processedOptions.filter(
        (option: string): boolean =>
          !!option.toLowerCase().includes(searchText.toLowerCase()),
      );
    }

    if (featuredOptionsValid) {
      processedOptions = processedOptions.filter(
        (option: string) => !featuredOptions.includes(option),
      );
    }

    if (sortOptions) {
      processedOptions = processedOptions.sort((a, b) => a.localeCompare(b));
    }

    combinedOptions = [...(featuredOptions || []), ...(processedOptions || [])];
    if (searchText && searchText !== '') combinedOptions.unshift(searchText);
  }

  return {
    processedOptions,
    combinedOptions,
    optionsValid,
    featuredOptionsValid,
  };
};
