const path = require('path')
const pkg = require('./package.json')

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'weutils.min.js',
		path: path.resolve(__dirname, 'dist'),
		library: `${pkg.name}`,
		libraryTarget: "umd"
	}
}