'use strict';

function normalizeOptions(options) {
	var codeGlobs = ['src/**/*.js', '!src/**/*.soy.js', 'test/**/*.js', 'gulpfile.js'];

	options = options || {};
	options.buildAmdDest = options.buildAmdDest || 'build/amd';
	options.buildGlobalsJqueryDest = options.buildGlobalsJqueryDest || 'build/globals-jquery';
	options.buildAmdJqueryDest = options.buildAmdJqueryDest || 'build/amd-jquery';
	options.buildJqueryDest = options.buildJqueryDest || 'build/jquery';
	options.bundleCssFileName = options.bundleCssFileName || 'all.css';
	options.bundleFileName = options.bundleFileName || 'metal.js';
	options.buildDest = options.buildDest || 'build/globals';
	options.buildSrc = options.buildSrc || 'src/**/*.js';
	options.cleanDir = options.cleanDir || 'build';
	options.corePathFromSoy = options.corePathFromSoy || 'bower:metal/src';
	options.cssDest = options.cssDest || 'build';
	options.cssSrc = options.cssSrc || 'src/**/*.css';
	options.formatGlobs = options.formatGlobs || codeGlobs;
	options.globalName = options.globalName || 'metal';
	options.lintGlobs = options.lintGlobs || codeGlobs;
	options.mainBuildJsTasks = options.mainBuildJsTasks || ['build:globals'];
	options.moduleName = options.moduleName || 'metal';
	options.scssIncludePaths = options.scssIncludePaths || ['bower_components'];
	options.scssSrc = options.scssSrc || 'src/**/*.scss';
	options.soyDest = options.soyDest || 'src';
	options.soyLocales = options.soyLocales;
	options.soyMessageFilePathFormat = options.soyMessageFilePathFormat;
	options.soyShouldGenerateJsComponent = !!options.soyShouldGenerateJsComponent;
	options.soySrc = options.soySrc || 'src/**/*.soy';
	options.taskPrefix = options.taskPrefix || '';

	return options;
}

module.exports = normalizeOptions;
