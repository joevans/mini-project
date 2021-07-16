const path = require("path");

module.exports = {
	output: {
		filename: "main.js"
	},
	module: {
		rules: [
		{
			test: /\.scss$/i,
			use: [ "style-loader", "css-loader", "sass-loader" ]
		}]
	}
}