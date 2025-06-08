import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ArticleTypeTabs } from './ArticleTypeTabs';
import { ArticleType } from '@/entities/Article';

const meta = {
    title: 'entities/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        value: ArticleType.ALL,
        onChangeType: fn(() => {}),
    },
};
