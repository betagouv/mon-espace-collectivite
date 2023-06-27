import PublicFooter from '@app/web/app/(public)/PublicFooter';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'PublicFooter',
  component: PublicFooter,
} as Meta<typeof PublicFooter>;

type Story = StoryObj<typeof PublicFooter>;

export const Desktop: Story = {};
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
