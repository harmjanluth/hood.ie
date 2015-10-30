var path = require('path');

module.exports = {
    entry: './src/js/init.js',
    output: {
        path: path.join(__dirname, 'www/js/'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: path.join(__dirname, 'src/js'),
                loader: 'babel-loader'
            }
        ]
    }
};