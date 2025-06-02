import type { Meta, StoryObj } from '@storybook/react';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleDetailsPage from './AdminPanelPage';

const meta = {
    title: 'pages/AdminPanelPage',
    component: ArticleDetailsPage,
    decorators: [
        (Story) => StoreDecorator({})((Story)),
    ],
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
