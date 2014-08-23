module.exports = function(grunt){
				grunt.initConfig({
						pkg: grunt.file.readJSON('package.json'),
						jsdoc : {
								dist : {
										src: ['*.js'],
										options: {
												destination: 'doc',
												configure: 'conf.json',
												template: './node_modules/jaguarjs-jsdoc'
										}
								}
						},
				open : {
    			docs : {
      			path: 'doc/index.html'
    				}
				}
				});

				// Load the plugin that provides the "uglify" task.
				grunt.loadNpmTasks('grunt-jsdoc');
				grunt.loadNpmTasks('grunt-open');

  			// Default task(s).
  			grunt.registerTask('default', ['jsdoc', 'open:docs']);
};