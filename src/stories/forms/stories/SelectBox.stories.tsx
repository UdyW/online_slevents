import { Meta, StoryObj } from '@storybook/react';
import { SelectBox as Component, Props } from '../components/SelectBox';

const meta = {
  title: 'Components/Form Elements/Select Box',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectBox: Story = {
  args: {
    id: 'abc-123',
    label: 'Select your option',
    supportingText: 'Please select which option details you wish to view',
    hint: 'All your options will be shown in the dropdown',
    options: [
      { value: '', label: 'Select an option' },
      { value: '1', label: 'option: 1' },
      { value: '2', label: 'option: 2' },
      { value: '3', label: 'option: 3' },
    ],
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'email', 'tel', 'number', 'password', 'url'],
      },
    },
    options: {
      table: {
        type: {
          summary: 'react node array',
        },
      },
    },
    id: {
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    supportingText: {
      control: {
        type: 'text',
      },
    },
    hint: {
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    hasError: {
      control: {
        type: 'boolean',
      },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    removeBrowserDefaults: {
      control: {
        type: 'boolean',
      },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    errorMessage: {
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    label: {
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
  },
  decorators: [(Decorator) => <Decorator />],
};
