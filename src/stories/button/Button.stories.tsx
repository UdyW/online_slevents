import type { Meta, StoryObj } from '@storybook/react';
import { Button as ButtonComponent } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: ButtonComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
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
    element: {
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
      options: ['none', 'ExternalLink'],
      mapping: {
        none: undefined,
        ExternalLink: '',
      },
    },
    loading: {
      control: {
        type: 'select',
        required: false,
        options: [true, false],
      },
    },
    label: {
      table: {
        type: {
          summary: 'string',
        },
      },
      control: {
        type: 'text',
      },
    },
    variant: {
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
