import type { Meta, StoryObj } from '@storybook/react';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [(Story) => StoreDecorator({
        loginForm: {
            username: 'admin',
            password: 'admin',
        },
        user: {},
        counter: {},
    })(Story)],
};

export const WithError: Story = {
    args: {},
    decorators: [(Story) => StoreDecorator({
        loginForm: {
            username: 'admin',
            password: 'admin',
            error: 'ERROR',
        },
        user: {},
        counter: {},
    })(Story)],
};

export const ButtonDisabled: Story = {
    args: {},
    decorators: [(Story) => StoreDecorator({
        loginForm: { isLoading: true },
        user: {},
        counter: {},
    })(Story)],
};
