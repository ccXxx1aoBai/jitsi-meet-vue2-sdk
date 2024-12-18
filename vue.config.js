module.exports = {
	transpileDependencies: true,
	devServer: {
		port: 8080,
		host: '0.0.0.0',
		https: true,
	},
	pages: {
		index: {
			entry: 'examples/entry.js',
			template:'public/index.html',
      filename:'index.html'
		}
	},
	
};
