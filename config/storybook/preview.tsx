import type { Preview } from '@storybook/react';
import ThemeDecorator from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import RouterDecorator from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import '../../src/app/styles/index.scss';
import { Theme } from '../../src/app/providers/ThemeProvider';

const preview: Preview = {
    decorators: [
        (Story) => ThemeDecorator(Theme.LIGHT)(Story),
        (Story) => RouterDecorator(Story),
    ],
};

export default preview;
