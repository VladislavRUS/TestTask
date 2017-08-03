module.exports = {
	js: {
		src: [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/velocity-animate/velocity.min.js',
            'node_modules/angular/angular.min.js',
            'node_modules/angular-animate/angular-animate.min.js',
            'node_modules/angular-ui-router/release/angular-ui-router.min.js',
			'app/dev/scripts/**/*.js',
            'app/dev/scripts/app.js'
        ],
		dest: 'app',
		watch: [
            'app/dev/scripts/**/*.js',
            'app/dev/scripts/app.js'
        ],
		out: 'main.js'
	},

	less: {
		src: [
			'app/dev/styles/main.less'
		],
		dest: 'app',
		watch: [
			'app/dev/styles/**/*.less'
		],
		out: 'main.css'
	},

	html: {
		watch: [
			'app/*.html',
			'app/dev/scripts/**/*.html'
		]
	}
};