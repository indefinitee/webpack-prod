import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentList } from './CommentList';

const meta = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
    comments: [
        {
            id: '1',
            text: 'some comment',
            articleId: '1',
            user: { id: '1', username: 'vasya pupkin' },
        },
        {
            id: '2',
            text: 'some comment',
            articleId: '2',
            user: { id: '2', username: 'vasya pupkin' },
        },
    ],
};

export const Light: Story = {
    args,
};

export const Dark: Story = {
    args,
};

Dark.decorators = [(Story) => ThemeDecorator(Theme.DARK)(Story)];
