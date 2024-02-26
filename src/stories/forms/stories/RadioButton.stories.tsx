import { Meta, StoryObj } from '@storybook/react';
import { RadioButton as Component, Props } from '../components/RadioButton';

const meta = {
  title: 'Components/Form Elements/Radio Button',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioButton: Story = {
  args: {
    label: 'Option 1',
    description: 'Option description',
  },
  argTypes: {
    description: {
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    isElementChecked: {
      control: {
        type: 'boolean',
      },
      table: {
        type: {
          summary: 'boolean',
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
    variant: {
      defaultValue: 'basic',
      options: ['basic', 'bordered'],
      control: {
        type: 'inline-radio',
      },
    },
    vertical: {
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
