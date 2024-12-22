import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextSize, TextTheme } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnlyTitle: Story = {
    args: {
        title: 'Пример заголовка',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Пример текста',
    },
};

export const TitleAndTextDark: Story = {
    args: {
        title: 'Пример заголовка',
        text: 'Пример текста',
    },
    decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'Пример заголовка',
    },
    decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
};

export const OnlyTextDark: Story = {
    args: {
        text: 'Пример текста',
    },
    decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
};

export const TitleAndText: Story = {
    args: {
        title: 'Пример заголовка',
        text: 'Пример текста',
    },
};

export const Error: Story = {
    args: {
        title: 'Пример заголовка',
        text: 'Пример текста',
        theme: TextTheme.ERROR,
    },
};

export const ErrorDark: Story = {
    args: {
        title: 'Пример заголовка',
        text: 'Пример текста',
        theme: TextTheme.ERROR,
    },
    decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
};

export const SizeM: Story = {
    args: {
        title: 'Пример заголовка',
        text: 'Пример текста',
        theme: TextTheme.ERROR,
        size: TextSize.M,
    },
    decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
};

export const SizeL: Story = {
    args: {
        title: 'Пример заголовка',
        text: 'Пример текста',
        theme: TextTheme.ERROR,
        size: TextSize.L,
    },
    decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
};
