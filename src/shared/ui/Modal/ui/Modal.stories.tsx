import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        isOpen: true,
        children: 'Бу. Испугался? Не бойся, я твой друг. Посмотри мне в глаза',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Бу. Испугался? Не бойся, я твой друг. Посмотри мне в глаза',
    },
    decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
};
