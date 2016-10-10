/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import webpack from 'webpack';

export default {
    context: __dirname,
    entry: './index.jsx',
    output: {
        path: `${__dirname}/build/js`,
        filename: 'scripts.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.css$/,
                loader: 'css-loader!autoprefixer-loader?browsers=last 2 versions'
            }
    ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    plugins: (() => {
        if (process.argv.indexOf('-p') !== -1) {
            return [
              new webpack.DefinePlugin({
                    'process.env': {
                        NODE_ENV: JSON.stringify('production'),
                    },
                }),
              new webpack.optimize.UglifyJsPlugin({
                    output: {
                        comments: false,
                    },
                }),
            ];
        }
        return [];
    })(),
};
