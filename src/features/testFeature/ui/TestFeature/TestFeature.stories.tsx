
import type { Meta, StoryObj } from '@storybook/react';

import { TestFeature } from './TestFeature';

const meta = {
    title: 'features/TestFeature',
    component: TestFeature,
    args: {},
} satisfies Meta<typeof TestFeature>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
args: {},
};
