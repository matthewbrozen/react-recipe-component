module.exports = (grunt) => {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		eslint: {
			options: {
				configFile: '.eslintrc'
			},
        	target: [
        		'components/**/*.js',
				'components/**/*.jsx'
        	]
    	},
		jsdoc: {
			components: {
				src: [
					'components/**/*.js',
					'components/**/*.jsx'
				],
				options: {
					destination: 'jsdocs',
					template : 'node_modules/ink-docstrap/template',
					configure: 'jsdoc.conf.json'
				}
			}
		},

		watch: {
			files: [
				'components/**/*.js',
				'components/**/*.jsx'
			],
			tasks: [
				'eslint',
				'jsdoc:components'
			]
		}
	});

	grunt.registerTask('default', ['eslint', 'jsdoc']);
}