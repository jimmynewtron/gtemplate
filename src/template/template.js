/**
 * Used to escape characters for inclusion in compiled string literals
 * Borrowed from lodash (http://lodash.com/)
 */
var reUnescapedString = /['\n\r\t\u2028\u2029\\]/g;
var stringEscapes = {
	'\\': '\\',
	"'": "'",
	'\n': 'n',
	'\r': 'r',
	'\t': 't',
	'\u2028': 'u2028',
	'\u2029': 'u2029'
};

function escapeStringChar(match) {
	return '\\' + stringEscapes[match];
}

var slice = Array.prototype.slice;

/**
 * @class Template
 */

function Template(code, options) {
	this.processors = [];
	this.compiled = false;
	this.options = options || {};
	this.setSource(code || '', false);
};

var p = Template.prototype;

/**
 * Sets template source
 * @param {String} source
 * @return this
 */
p.setSource = function(source, noCompile) {
	this.source = source;
	return this;
};

/**
 * Gets the template source
 * @return {String}
 */
p.getSource = function() {
	return this.source;
};

/**
 * Renders the template
 * @param {Object} data
 * @param {Object} [scope]
 * @return {String}
 */
p.render = function(data, scope) {
	if (!this.compiled) this.compile();
	return this.fn.call(typeof scope === 'object' && scope !== null ? scope : this, this.processors, data);
};

/**
 * Register processor
 * @param {RegExp|String} matcher		RegExp to match a template chunk
 * @param {Function} [processorFn]		If omitted, the matched code will be evaluated
 * @return this
 */
p.registerProcessor = function(matcher, processorFn) {
	this.processors.push({
		matcher: matcher instanceof RegExp ? matcher.source : matcher,
		evaluate: (typeof processorFn === 'undefined'),
		fn: processorFn
	});

	return this;
};

/**
 * Compiles the template source to a function
 * @private
 */
p.compile = function() {
	var index = 0,
		processors = this.processors,
		len = processors.length,
		re = '',
		p;

	for (; index < len; index++) {
		re += processors[index].matcher + '|';
	}

	re += '$';

	try {
		re = new RegExp(re, 'g');
	} catch (e) {
		throw new Error('Error on compile preprocessors');
	}

	index = 0;
	var source = this.source,
		fnBody = 'var __p=arguments[0],o=arguments[1]||{};return \'';

	source.replace(re, function() {
		var i = 0,
			args = slice.call(arguments),
			match = args.shift(),
			src = args.pop(),
			offset = args.pop(),
			found = false;

		fnBody += source.slice(index, offset).replace(reUnescapedString, escapeStringChar);

		for (; i < len; i++) {
			if (args[i]) {
				found = args[i];
				if (processors[i].evaluate) {
					fnBody += "'+((" + found + ")||'')+'";
				} else {
					fnBody += "'+(__p[" + i + "].fn(o." + found + "||'')||'')+'";
				}
				break;
			}
		}

		index = offset + match.length;
	});

	fnBody += "';";

	try {
		this.fn = Function(fnBody);
		this.compiled = true;
	} catch (e) {
		throw new Error("Failed to build template: " + e);
	}
};

exports.Template = Template;