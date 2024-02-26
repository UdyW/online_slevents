import { Meta, StoryObj } from '@storybook/react';
import { TextField as TextFieldComponent } from '../components/TextField';

const meta = {
  title: 'Components/Form Elements/Text Field',
  component: TextFieldComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextFieldComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextField: Story = {
  args: {
    id: 'abc-123',
    label: 'Email address',
    supportingText: 'We require your email to set up your online account',
    hint: 'Please ensure this is a valid email address',
    placeholder: 'email@slevent.co.uk',
  },

  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'email', 'tel', 'number', 'password', 'url'],
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
    placeholder: {
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
  },
  decorators: [(Decorator) => <Decorator />],
};
