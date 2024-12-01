import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Select } from './Select';

const meta = {
    title: 'shared/Select',
    component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Проверочный текст',
        options: [
            { value: '1', content: 'пункт 1' },
            { value: '2', content: 'пункт 2' },
            { value: '3', content: 'пункт 3' },
        ],
    },
};
Primary.decorators = [(Story) => ThemeDecorator(Theme.LIGHT)(Story)];

export const Secondary: Story = {
    args: {
        label: 'Проверочный текст',
        options: [
            { value: '1', content: 'пункт 1' },
            { value: '2', content: 'пункт 2' },
            { value: '3', content: 'пункт 3' },
        ],
    },
};
Secondary.decorators = [(Story) => ThemeDecorator(Theme.DARK)(Story)];
