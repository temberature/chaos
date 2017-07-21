var developmentConfig = require('miaow-development-config');
var productionConfig, testConfig;

try {
	productionConfig = require('miaow-production-config');
} catch (e) {}

// 开发环境
developmentConfig.domain = '/cdn/';
// developmentConfig.debug = false;

// 生产环境
if (productionConfig) {
	productionConfig.domain = '//60.205.223.68:8080/cdn/';
	testConfig = Object.assign({}, productionConfig, {
		environment: 'test'
	});
}

module.exports = [developmentConfig, productionConfig, testConfig];
