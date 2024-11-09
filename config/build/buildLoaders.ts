import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
            name: '[path][name].[ext]',
        },
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const cssLoader = buildCssLoaders(isDev);

    // Без тайпскрипта использовать babel
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [svgLoader, fileLoader, babelLoader, typescriptLoader, cssLoader];
}
