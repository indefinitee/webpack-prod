import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const meta = {
    title: 'shared/Flex',
    component: Flex,
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
    args: {
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
    },
};

export const Column: Story = {
    args: {
        direction: 'column',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
    },
};

export const RowGap8: Story = {
    args: {
        gap: '8',
        direction: 'row',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
    },
};

export const RowGap16: Story = {
    args: {
        gap: '16',
        direction: 'row',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
    },
};

export const ColumnGap8: Story = {
    args: {
        gap: '8',
        direction: 'column',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
    },
};

export const ColumnGap16: Story = {
    args: {
        gap: '16',
        direction: 'column',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
    },
};
