var fse = require('fs-extra');
var settings = require('./settings');
var u = require('./utilities');

var marked = require('marked');
marked.setOptions({
	breaks: true
});

var documentationHandler = function () {
	function getDocs(patternName) {
		var fileName = patternName + '.md';
		var filePath = u.getAppPath(settings.paths.src.patterns, fileName);

		if (fse.existsSync(filePath)) {
			var fileData = fse.readFileSync(filePath, settings.encode);
			return marked(fileData);
		}

		return null
	}

	return {
		getDocs: getDocs
	}
}

module.exports = documentationHandler;
