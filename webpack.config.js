module.exports = {
    entry: './client',
    output: {
        path: 'public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
         {
           test: /\.(es6|jsx?)$/,
           exclude: /node_modules/,
           loader: 'babel',
           query: {
             presets: ['react', 'es2015', 'stage-0']
           }
         },
         {
           test: /\.scss$/,
           loaders: ["style", "css", "sass"]
         }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.es6']
    }
}
