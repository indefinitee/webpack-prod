import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesInfiniteList } from './ArticlesInfiniteList';

const meta = {
    title: 'pages/Article/ArticlesInfiniteList',
    component: ArticlesInfiniteList,
} satisfies Meta<typeof ArticlesInfiniteList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
