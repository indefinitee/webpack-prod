import type { Meta, StoryObj } from '@storybook/react';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Page } from './Page';

const meta = {
    title: 'widgets/Page',
    component: Page,
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
    children: <div>Привет</div>,
};

export const Light: Story = {
    args,
    decorators: [(Story) => StoreDecorator({})(Story)],
};

export const Dark: Story = {
    args,
    decorators: [
        (Story) => ThemeDecorator(Theme.DARK)(Story),
        (Story) => StoreDecorator({})(Story),
    ],
};
