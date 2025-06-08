import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleSortSelector } from './ArticleSortSelector';
import { ArticleSortField } from '@/entities/Article';

const meta = {
    title: 'shared/ArticleSortSelector',
    component: ArticleSortSelector,
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        sort: ArticleSortField.CREATED,
        order: 'asc',
        onChangeSort: fn(() => {}),
        onChangeOrder: fn(() => {}),
    },
    decorators: [(Story) => StoreDecorator({
        articlesPage: {
            sort: ArticleSortField.CREATED,
            order: 'asc',
            search: '',
            hasMore: true,
            _inited: true,
        },
    })(Story)],
};
