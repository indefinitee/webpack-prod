import type { Meta, StoryObj } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        data: {
            username: 'admin',
            lastname: 'admin',
            age: 32,
            country: Country.Russia,
            city: 'Moscow',
            currency: Currency.USD,
            avatar,
        },
    },
};

export const WithError: Story = {
    args: {
        error: 'true',
    },
};

export const InLoading: Story = {
    args: {
        isLoading: true,
    },
};
