import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';
import { resolvePath } from 'react-router-dom';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

  const { isDev } = options;

  const fileLoader =  {
    test: /\.(png|jpe?g|gif)$/i,
    loader: 'file-loader',
    options: {
      name: '[path][name].[ext]',
    }
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resolvePath: string) => Boolean(resolvePath.includes('.module.')),
            localIdentName: isDev 
            ? '[path][name]__[local]--[hash:base64:5]' 
            : '[hash:base64:8]'
          },
        }
      },
      "sass-loader",
    ]
  }

  // Без тайпскрипта использовать babel
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }

    return [svgLoader, fileLoader, typescriptLoader, cssLoader]
}