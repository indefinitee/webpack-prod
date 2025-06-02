import type { Meta, StoryObj } from '@storybook/react';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlesInfiniteList } from './ArticlesInfiniteList';

const meta = {
    title: 'pages/Article/ArticlesInfiniteList',
    component: ArticlesInfiniteList,
    decorators: [
        (Story) => StoreDecorator({})((Story)),
    ],
} satisfies Meta<typeof ArticlesInfiniteList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
