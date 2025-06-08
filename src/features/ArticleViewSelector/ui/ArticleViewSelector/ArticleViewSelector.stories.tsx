import type { Meta, StoryObj } from '@storybook/react';

import { ArticleViewSelector } from './ArticleViewSelector';
import { ArticleView } from '@/entities/Article';

const meta = {
    title: 'features/ArticleViewSelector',
    component: ArticleViewSelector,
    args: {},
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        view: ArticleView.FULL,
    },
};
