module.exports = {
	entry: './src/js/main.jsx',
	output: {
		path: 'public/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				loader:'babel-loader',
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				query: {
					presets: ['react']
				}
			}
		]
	}
};