---
to: '<%= story? `components/${category}/${name}/${name}.stories.ts` : null %>'
---

import type { Meta, StoryObj } from '@storybook/react';
import { <%= name %> } from '@/components/<%= category %>/<%= name %>/<%= name %>';
import '@/styles/main.scss';

const meta: Meta<typeof <%= name %>> = {
  title: '<%= category %>/<%= name %>',
  component: <%= name %>,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof <%= name %>>;

export const example: Story = {
  args: {},
};
