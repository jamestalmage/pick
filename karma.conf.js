module.exports = function(karma) {
  karma.set({
    frameworks:['mocha'],
    files:[
      'node_modules/chai/chai.js',
      'index.js',
      'test/*.js'
    ],
    browsers: ['PhantomJS'],
    singleRun: true,
    autoWatch: false
  });
};