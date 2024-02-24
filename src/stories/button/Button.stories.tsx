import type { Meta, StoryObj } from '@storybook/react';
import type { Props } from './types';
import { Button as ButtonComponent } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: ButtonComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof ButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    element: 'button',
    loading: false,
    label: 'Press me',
    variant: 'primary',
  },
  argTypes: {
    disabled: {
      type: {
        required: false,
      },
      control: {
        type: 'select',
        options: [true, false],
      },
    },
    element: {
      type: {
        required: false,
      },
      control: {
        type: 'select',
        options: ['button', 'a'],
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    icon: {
      type: {
        required: false,
      },
      options: ['none', 'ExternalLink'],
      mapping: {
        none: undefined,
        ExternalLink: '',
      },
    },
    loading: {
      type: {
        required: false,
      },
      control: {
        type: 'select',
        options: [true, false],
      },
    },
    label: {
      type: {
        required: false,
      },
      table: {
        type: {
          summary: 'string',
        },
      },
      control: {
        type: 'text',
      },
    },
    href: {
      type: {
        required: false,
      },
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
      type: {
        required: false,
      },
      options: ['link', 'primary', 'secondary', 'marketing'],
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
  decorators: [(Decorator) => <Decorator />],
};
