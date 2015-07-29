var applicationConfiguration = require('./Config/Config');

exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	
	seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.39.0.jar',
	
	baseUrl: 'http://localhost:3000',
	
	/*multiCapabilities: [
	 	//{ browserName: 'firefox' },
		{ browserName: 'chrome' },
		/*{ browserName: 'phantomjs',
		  'phantomjs.binary.path': require('phantomjs').path,
		 'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG'] }*/
	 /*],*/
	 
	 capabilities: {
	  'browserName': 'chrome',
	  },
	  
	  //directConnect: true,
	  
	/*capabilities: {
	  'browserName': 'phantomjs',
	
	  /* 
	   * Can be used to specify the phantomjs binary path.
	   * This can generally be ommitted if you installed phantomjs globally.
	   */
	  //'phantomjs.binary.path': require('phantomjs').path,
	
	  /*
	   * Command line args to pass to ghostdriver, phantomjs's browser driver.
	   * See https://github.com/detro/ghostdriver#faq
	   */
	  //'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
	//},*/
	
	framework: 'jasmine2',
	
	onPrepare: function() {
		browser.driver.manage().window().maximize();
		browser.get('/');
	},	
	
	specs: applicationConfiguration.Assets.Tests.E2E,

	jasmineNodeOpts: {
		showColors: true,
		isVerbose: true,
    	includeStackTrace: true
	}
};