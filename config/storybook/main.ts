import { StorybookConfig } from '@storybook/react-webpack5';
import TsConfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                background: false,
            },
        },
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        '@storybook/addon/themes',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    webpackFinal: async (config, { configType }) => {
        config!.resolve!.plugins = [new TsConfigPathsPlugin()];
        return config;
    },
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: 'automatic',
                },
            },
        },
    }),
    docs: {
        autodocs: 'tag',
    },
};
export default config;
