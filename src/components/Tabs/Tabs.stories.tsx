import Tabs, { Tab } from './index';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    variant: {
      control: 'select',
      options: ['pill', 'underline'],
    },
  },
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
      },
      defaultViewport: 'desktop',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

// Sample tabs data with badges
const tabsData: Tab[] = [
  { label: 'Emails' },
  { label: 'Files', badge: { label: '3', variant: 'positive' } },
  { label: 'Warning', badge: { label: '!', variant: 'negative' } },
  { label: 'Edits' },
  { label: 'Dashboard' },
  { label: 'Messages' },
];

// ---- Web Story (Desktop view) ----
export const PillTabsDesktop: Story = {
  render: (args) => <Tabs {...args} tabs={tabsData} variant="pill" />,
  parameters: {
    viewport: { defaultViewport: 'desktop' }, // Desktop viewport for web testing
  },
};

export const UnderlineTabsDesktop: Story = {
  render: (args) => <Tabs {...args} tabs={tabsData} variant="underline" />,
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
};

// ---- Mobile Story (Mobile view with scrolling) ----
export const PillTabsMobile: Story = {
  render: (args) => (
    <div style={{ width: '375px', overflowX: 'auto' }}>
      {' '}
      {/* Ensures overflow for mobile */}
      <Tabs {...args} tabs={tabsData.concat(tabsData)} variant="pill" />
    </div>
  ),
  parameters: {
    viewport: { defaultViewport: 'mobile' }, // Mobile viewport for scrolling test
  },
};

export const UnderlineTabsMobile: Story = {
  render: (args) => (
    <div style={{ width: '375px', overflowX: 'auto' }}>
      {' '}
      {/* Ensures overflow for mobile */}
      <Tabs {...args} tabs={tabsData.concat(tabsData)} variant="underline" />
    </div>
  ),
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
