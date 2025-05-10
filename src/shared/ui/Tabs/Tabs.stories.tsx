import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Tabs } from './Tabs';

const meta = {
    title: 'shared/Tabs',
    component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        tabs: [
            {
                value: 'tab1',
                content: 'tab1 content',
            },
            {
                value: 'tab2',
                content: 'tab2 content',
            },
            {
                value: 'tab3',
                content: 'tab3 content',
            },
        ],
        value: 'tab2',
        onTabClick: fn(() => 'onTabClick'),
    },
};
