import ThemeDecorator from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import RouterDecorator from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import '../../src/app/styles/index.scss';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
// import 'loki/configure- react';

const preview = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    decorators: [
        (Story) => ThemeDecorator(Theme.LIGHT)(Story),
        (Story) => RouterDecorator(Story),
        (Story) => SuspenseDecorator(Story),
    ],
    layout: 'fullscreen',
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: Theme.LIGHT, color: '#ffffff' },
            { name: 'dark', class: Theme.DARK, color: '#000000' },
            { name: 'brown', class: Theme.BROWN, color: '#6e3c07' },
        ],
    },
};

export default preview;
