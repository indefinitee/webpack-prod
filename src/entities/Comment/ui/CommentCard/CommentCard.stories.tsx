import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentCard } from './CommentCard';

const meta = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
    comment: {
        id: '1',
        text: 'some comment',
        user: {
            id: '1',
            username: 'vasya pupkin',
        },
    },
    isLoading: false,
};

export const Light: Story = {
    args,
};

export const Dark: Story = {
    args,
};

export const LoadingLight: Story = {
    args: {
        ...args,
        isLoading: true,
    },
};

export const LoadingDark: Story = {
    args: {
        ...args,
        isLoading: true,
    },
};

Dark.decorators = [(Story) => ThemeDecorator(Theme.DARK)(Story)];
LoadingDark.decorators = [(Story) => ThemeDecorator(Theme.DARK)(Story)];

LoadingLight.decorators = [(Story) => ThemeDecorator(Theme.LIGHT)(Story)];
