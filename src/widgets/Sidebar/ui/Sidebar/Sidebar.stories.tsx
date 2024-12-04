import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';

const meta = {
    title: 'widget/Sidebar',
    component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    decorators: [(Story) => StoreDecorator({
        user: { authData: {} },
    })((Story))],
};

export const Dark: Story = {
    decorators: [
        (Story) => ThemeDecorator(Theme.DARK)(Story),
        (Story) => StoreDecorator({
            user: {},
        })((Story))],
};
