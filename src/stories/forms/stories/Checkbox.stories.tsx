import { Meta, StoryObj } from '@storybook/react';
import { CheckBox as Component, Props } from '../components/CheckBox';

const meta = {
  title: 'Components/Form Elements/Check Box',
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckBox: Story = {
  args: {
    id: '1',
    label: 'Value 1',
    disabled: false,
    isChecked: false,
  },
  argTypes: {
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
    isChecked: {
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
  },
  decorators: [(Decorator) => <Decorator />],
};
