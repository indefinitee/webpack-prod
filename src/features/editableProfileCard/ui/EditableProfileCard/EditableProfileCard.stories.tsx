import type { Meta, StoryObj } from '@storybook/react';

import { EditableProfileCard } from './EditableProfileCard';

const meta = {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    args: {},
} satisfies Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        id: '1',
    },
};
