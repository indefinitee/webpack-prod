import path from "path";
import webpack from 'webpack'
import { buildOptions } from "./types/config";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";


export function buildWebpackConfig (options: buildOptions): webpack.Configuration {

    const { mode, paths } = options

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
          },
          resolve: buildResolvers(),
      };
}