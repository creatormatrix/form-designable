import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import MonacoPlugin from 'monaco-editor-webpack-plugin'
import path from 'path'
//import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
// import CopyPlugin from 'copy-webpack-plugin'
import webpack from 'webpack'
import baseConfig from './webpack.base'

const PORT = 3000

const createPages = (pages) => {
  return pages.map(({ filename, template, chunk }) => {
    return new HtmlWebpackPlugin({
      filename,
      template,
      inject: 'body',
      chunks: chunk,
    })
  })
}

for (const key in baseConfig.entry) {
  if (Array.isArray(baseConfig.entry[key])) {
    baseConfig.entry[key].push(
      require.resolve('webpack/hot/dev-server'),
      `${require.resolve('webpack-dev-server/client')}?http://localhost:${PORT}`
    )
  }
}

export default {
  ...baseConfig,
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    ...createPages([
      {
        filename: 'index.html',
        template: path.resolve(__dirname, './template.ejs'),
        chunk: ['playground'],
      },
    ]),
    new webpack.HotModuleReplacementPlugin(),
    new MonacoPlugin({
      languages: ['json'],
    }),
    // new CopyPlugin({from 'assets'})

    // new BundleAnalyzerPlugin()
  ],
  devServer: {
    host: '127.0.0.1',
    open: true,
    port: PORT,
  },
}
