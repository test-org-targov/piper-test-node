exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	useSeleniumJar: false,
	browsers: [{
		browserName : 'chrome',
		capabilities : {
			chromeOptions : {
				args : [ 'start-maximized' ]
			},
			remoteWebDriverOptions : {
				maximized : false
			}
		}
	}],
    profile: 'integration',

    baseUrl: process.env.TARGET_SERVER_URL,
    //baseUrl: 'https://continuousdelivery-piper-test-node-sbx.cfapps.sap.hana.ondemand.com/',

    specs: './uiveri5/*.spec.js',

    reporters : [
    	{
    		name : './reporter/jsonReporter'
    	},
    	{
    		name : './reporter/junitReporter',
    		reportName: './target/report/TEST-uiveri5.xml',
    		prefix: '',
    		postfix: ''
    	},
    	{
    		name : './reporter/screenshotReporter',
    		screenshotsRoot: './target/report'
    	}]
};
