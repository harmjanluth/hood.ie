var path = require('path');

module.exports = {
    entry: './src/init.js',
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: path.join(__dirname, 'src'),
                loader: 'babel-loader'
            }
        ]
    }
};