import { Meta, StoryObj } from '@storybook/react';
import { Menu as MenuComponent } from '../Menu';

const meta = {
  title: 'Components/Menu',
  component: MenuComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MenuComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Menu: Story = {
  args: {
    isUserAuthenticated: false,
    primaryMenu: [
      {
        name: 'Browse',
        url: '/',
        icon: 'search',
      },
      {
        name: 'How it Works',
        icon: 'help',
        url: '',
      },
      {
        name: 'About Us',
        icon: 'home',
        url: '',
      },
      {
        name: 'Become a Supplier',
        icon: '',
        url: '',
      },
    ],
    authenticatedMenu: [
      {
        name: 'View my profile',
        url: '/myaccount/changetariff',
        icon: '',
      },
      {
        name: 'My details',
        url: '/myaccount/details',
        icon: '',
      },
      {
        name: 'My quotes',
        url: '/my/loyalty',
        icon: '',
      },
      {
        name: 'Messages',
        url: '/myaccount/marketing-preferences',
        icon: '',
      },
      {
        name: 'Log out',
        url: 'https://google.co.uk',
      },
    ],
    authenticatedMenuName: 'Account',
    loginUrl: 'http://google.co.uk',
    loginText: 'Sign In',
    logoutText: 'Sign out',
    logoutUrl: 'http://google.co.uk',
    showAccountSwitcher: true,
    accountSwitcherUrl: 'http://google.co.uk',
    accountSwitcherText: 'Account Switcher',
    customerAddress: '10, Downing Street',
    homeUrl: 'http://google.co.uk',
  },

  argTypes: {
    isUserAuthenticated: {
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: {
        type: 'boolean',
      },
    },
    homeUrl: {
      type: {
        name: 'string',
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
    accountSwitcherUrl: {
      type: {
        name: 'string',
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
    accountSwitcherText: {
      type: {
        name: 'string',
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
    customerAddress: {
      type: {
        name: 'string',
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
    authenticatedMenuName: {
      type: {
        name: 'string',
        required: true,
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
    loginUrl: {
      type: {
        name: 'string',
        required: true,
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
    loginText: {
      type: {
        name: 'string',
        required: true,
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
    logoutText: {
      type: {
        name: 'string',
        required: true,
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
    logoutUrl: {
      type: {
        name: 'string',
        required: true,
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
    brandLogo: {
      table: {
        type: {
          summary: ['energy', 'broadband'],
        },
      },
      options: ['energy', 'broadband'],
      control: {
        type: 'select',
      },
    },
    showAccountSwitcher: {
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: {
        type: 'boolean',
      },
    },
    authenticatedMenu: {
      table: {
        type: {
          summary: 'object array',
        },
      },
      control: {
        type: 'object',
      },
    },
    featuredMenuItem: {
      table: {
        type: {
          summary: 'object',
        },
      },
      control: {
        type: 'object',
      },
    },
    secondaryMenu: {
      table: {
        type: {
          summary: 'object array',
        },
      },
      control: {
        type: 'object',
      },
    },
    primaryMenu: {
      table: {
        type: {
          summary: 'object array',
        },
      },
      control: {
        type: 'object',
      },
    },
  },
  decorators: [(Decorator) => <Decorator />],
};
