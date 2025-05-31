import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../../Button/Button';
import { Popover } from './Popover';

const meta = {
    title: 'shared/Popover',
    component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
    { content: 'test111', value: 'testset111' },
    { content: 'test222', value: 'testset222' },
];

const value = 'testset222';

export const topLeft: Story = {
    args: {
        direction: 'top left',
        trigger: <Button>Press</Button>,
        children: <div>test</div>,
    },
};

export const topRight: Story = {
    args: {
        direction: 'top right',
        trigger: <Button>Press</Button>,
        children: <div>test</div>,
    },
};

export const bottomLeft: Story = {
    args: {
        direction: 'bottom left',
        trigger: <Button>Press</Button>,
        children: <div>test</div>,
    },
};

export const bottomRight: Story = {
    args: {
        direction: 'bottom right',
        trigger: <Button>Press</Button>,
        children: <div>test</div>,
    },
};
