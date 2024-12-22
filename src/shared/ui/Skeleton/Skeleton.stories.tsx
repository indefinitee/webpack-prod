import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        borderRadius: '10px',
        width: '200px',
        height: '100px',
    },
};

export const Circle: Story = {
    args: {
        borderRadius: '50%',
        width: '50px',
        height: '50px',
    },
};
