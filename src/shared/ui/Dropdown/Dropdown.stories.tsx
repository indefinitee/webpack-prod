import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button/Button';
import { Dropdown } from './Dropdown';

const meta = {
    title: 'shared/Dropdown',
    component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DropdownPrimary: Story = {
    args: {
        trigger: <Button>Open</Button>,
        items: [
            {
                content: 'testContent',
            },
            {
                content: 'testContent2',
            },
            {
                content: 'testContent3',
            },
        ],
    },
};
