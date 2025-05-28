import type { Meta, StoryObj } from '@storybook/react';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticlesPage from './ArticlesPage';

const meta = {
    title: 'pages/Article/ArticlesPage',
    component: ArticlesPage,
    decorators: [
        (Story) => StoreDecorator({})((Story)),
    ],
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
