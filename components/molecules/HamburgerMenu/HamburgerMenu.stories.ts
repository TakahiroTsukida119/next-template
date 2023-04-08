import type { Meta, StoryObj } from '@storybook/react';
import { HamburgerMenu } from '@/components/molecules/HamburgerMenu/HamburgerMenu';
import '@/styles/main.scss';

const meta: Meta<typeof HamburgerMenu> = {
  title: 'molecules/HamburgerMenu',
  component: HamburgerMenu,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof HamburgerMenu>;

export const example: Story = {};
