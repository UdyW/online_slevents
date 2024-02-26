import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '../../theming/createTheme';
import {
  AutoComplete as Component,
  AutoCompleteProps as Props,
} from '../components/AutoComplete/AutoComplete';

const meta = {
  title: 'Components/Form Elements/Auto Complete',
  component: Component,
  tags: ['autodocs'],
  decorators: [
    (Decorator) => <Decorator />,
    (AutoCompleteStory) => (
      <ThemeProvider theme={createTheme()}>
        <AutoCompleteStory />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AutoComplete: Story = {
  args: {
    id: 'abc-123',
    label: 'Select your account',
    supportingText: 'Please select which account details you wish to view',
    hint: 'All your accounts will be shown in the dropdown',
    options: [
      'Afghanistan',
      'Albania',
      'Algeria',
      'American Samoa',
      'Andorra',
      'Angola',
      'Anguilla',
      'Antarctica',
      'Antigua and Barbuda',
      'Argentina',
      'Armenia',
      'Aruba',
      'Australia',
      'Austria',
      'Azerbaijan',
      'Bahamas (the)',
      'Bahrain',
      'Bangladesh',
      'Barbados',
      'Belarus',
      'Belgium',
      'Belize',
      'Benin',
      'Bermuda',
      'Bhutan',
      'Bolivia (Plurinational State of)',
      'Bonaire, Sint Eustatius and Saba',
      'Bosnia and Herzegovina',
      'Botswana',
      'Bouvet Island',
      'Brazil',
      'British Indian Ocean Territory (the)',
      'Brunei Darussalam',
      'Bulgaria',
      'Burkina Faso',
      'Burundi',
      'Cabo Verde',
      'Cambodia',
      'Cameroon',
      'Canada',
      'Cayman Islands (the)',
      'Central African Republic (the)',
      'Chad',
      'Chile',
      'China',
      'Christmas Island',
      'Cocos (Keeling) Islands (the)',
      'Colombia',
      'Comoros (the)',
      'Congo (the Democratic Republic of the)',
    ],
    featuredOptions: ['Bahrain', 'Bangladesh', 'Barbados'],
  },
  decorators: [(Decorator) => <Decorator />],
};
