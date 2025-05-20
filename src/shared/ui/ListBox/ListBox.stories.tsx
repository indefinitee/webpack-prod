import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';

const meta = {
    title: 'shared/ListBox',
    component: ListBox,
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
    { content: 'test111', value: 'testset111' },
    { content: 'test222', value: 'testset222' },
];

const value = 'testset222';

export const topLeft: Story = {
    args: {
        items,
        value,
        direction: 'top left',
    },
};

export const topRight: Story = {
    args: {
        items,
        value,
        direction: 'top right',
    },
};

export const bottomLeft: Story = {
    args: {
        items,
        value,
        direction: 'bottom left',
    },
};

export const bottomRight: Story = {
    args: {
        items,
        value,
        direction: 'bottom right',
    },
};
