import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    decorators: [(Story) => StoreDecorator({
        profile: {
            form: {
                firstname: 'Vlad',
                lastname: 'Ivanov',
                age: 31,
                currency: Currency.USD,
                country: Country.Russia,
                city: 'New York',
            },
        },
    })(Story)],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
Primary.decorators = [(Story) => ThemeDecorator(Theme.LIGHT)(Story)];

export const Secondary: Story = {};
Secondary.decorators = [(Story) => ThemeDecorator(Theme.DARK)(Story)];
