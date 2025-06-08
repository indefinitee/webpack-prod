import babelRemovePropsPlugin from '../babel/babelRemovePropsPlugin';

interface BabelLoaderOptions {
    isTsx?: boolean;
    isDev: boolean;
}

export function buildBabelLoader({ isTsx, isDev }: BabelLoaderOptions) {
    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                    [
                        '@babel/plugin-transform-typescript',
                        {
                            isTSX: isTsx,
                        },
                    ],
                    '@babel/plugin-transform-runtime',
                    isTsx && [
                        babelRemovePropsPlugin,
                        {
                            props: ['data-testid'],
                        },
                    ],
                ].filter(Boolean),
            },
        },
    };
}
