module.exports = {
 entry: "./scripts/app.js",
 output: {
	filename: "out.js"
 },
 devServer: {
  inline: true,
  contentBase: './',
  port: 3001
},
 watch: true,
 module: {
   loaders: [{
     test: /\.js$/,
     exclude: /node_modules/,
     loader: "babel-loader",
     query: { "presets": ['env']}
   },
   {
     test: /\.scss$/,
     loader: 'style-loader!css-loader!sass-loader'
   },
   {
     test: /\.html$/,
     loader: "raw-loader"
    }
  ]
 }
}


//./node_modules/.bin/webpack
