import { useState } from 'react';
import TabItem, { TabItemProps } from './index';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TabItem> = {
  title: 'Components/TabItem',
  component: TabItem,
  argTypes: {
    variant: {
      control: 'select',
      options: ['pill', 'underline'],
    },
    isSelected: {
      control: 'boolean',
      defaultValue: false,
    },
    badge: {
      control: { type: 'object' },
      defaultValue: null,
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

type Story = StoryObj<typeof TabItem>;

// Reusable story for both mobile and desktop cases
const TabItemStoryTemplate = ({
  variant,
  isSelected,
  badge,
  onClick,
}: TabItemProps) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <TabItem
        label="Emails"
        isSelected={isSelected}
        variant={variant}
        badge={badge}
        onClick={onClick || (() => setActiveTab(0))}
      />
      <TabItem
        label="Files"
        isSelected={!isSelected}
        variant={variant}
        badge={badge ? { label: 'Warning', variant: 'negative' } : undefined}
        onClick={onClick || (() => setActiveTab(1))}
      />
    </div>
  );
};

// ---- Desktop Stories ----
export const PillTabDesktop: Story = {
  render: (args) => <TabItemStoryTemplate {...args} variant="pill" />,
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
};

export const UnderlineTabDesktop: Story = {
  render: (args) => <TabItemStoryTemplate {...args} variant="underline" />,
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
};

// ---- Mobile Stories ----
export const PillTabMobile: Story = {
  render: (args) => <TabItemStoryTemplate {...args} variant="pill" />,
  parameters: {
    viewport: { defaultViewport: 'mobile' },
  },
};

export const UnderlineTabMobile: Story = {
  render: (args) => <TabItemStoryTemplate {...args} variant="underline" />,
  parameters: {
    viewport: { defaultViewport: 'mobile' },
  },
};

// ---- Stories with Badge ----
export const PillTabWithBadge: Story = {
  render: (args) => (
    <TabItemStoryTemplate
      {...args}
      variant="pill"
      badge={{ label: '3', variant: 'positive' }}
    />
  ),
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
};

export const UnderlineTabWithBadge: Story = {
  render: (args) => (
    <TabItemStoryTemplate
      {...args}
      variant="underline"
      badge={{ label: 'New', variant: 'positive' }}
    />
  ),
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
};
