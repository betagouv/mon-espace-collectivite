import SignupPanel from '@app/web/app/(public)/(authentication)/creer-un-compte/SignupPanel';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SignupPanel> = {
  title: 'SignupPanel',
  component: SignupPanel,
};

export default meta;

type Story = StoryObj<typeof SignupPanel>;

export const Desktop: Story = {};
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
