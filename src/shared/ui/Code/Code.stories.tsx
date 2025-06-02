import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Code } from './Code';

const meta = {
    title: 'shared/Code',
    component: Code,
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: 'import type { Meta, StoryObj } from \'@storybook/react\';\n'
            + "import { Theme } from 'app/providers/ThemeProvider';\n"
            + "import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';\n"
            + "import Code from './Code';\n"
            + '\n'
            + 'const meta = {\n'
            + "    title: 'shared/Code',\n"
            + '    component: Code,\n'
            + '} satisfies Meta<typeof Code>;\n'
            + '\n'
            + 'export default meta;\n'
            + 'type Story = StoryObj<typeof meta>;',
    },
};
Primary.decorators = [(Story) => ThemeDecorator(Theme.LIGHT)(Story)];
