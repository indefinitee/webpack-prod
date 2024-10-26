import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
Primary.args = {
    children: 'Link',
    theme: AppLinkTheme.PRIMARY,
};
Primary.decorators = [(Story) => ThemeDecorator(Theme.LIGHT)(Story)];

export const Secondary: Story = {};
Secondary.args = {
    children: 'Link',
    theme: AppLinkTheme.SECONDARY,
};
Secondary.decorators = [(Story) => ThemeDecorator(Theme.DARK)(Story)];
