import Badge from './index';
import type { Meta, StoryObj } from '@storybook/react';

// Meta configuration for Storybook
const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered', // Center the layout for the badge
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

// Neutral Badge story
export const NeutralBadge: Story = {
  args: {
    variant: 'neutral',
    label: 'Badge',
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop', // Add viewport options to match mobile and desktop views
    },
  },
};

// Positive Badge story
export const PositiveBadge: Story = {
  args: {
    variant: 'positive',
    label: 'Badge',
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop', // Desktop view
    },
  },
};

// Negative Badge story
export const NegativeBadge: Story = {
  args: {
    variant: 'negative',
    label: 'Badge',
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop', // Desktop view
    },
  },
};

// Mobile view with all variants
export const MobileViewBadges: Story = {
  render: () => (
    <div>
      <Badge label="Badge" variant="neutral" />
      <Badge label="Badge" variant="positive" />
      <Badge label="Badge" variant="negative" />
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'mobile1', // Mobile view
    },
  },
};
