describe('Generic Template tests', function() {
	var tpl = null;

	beforeEach(function() {
		tpl = new Template();
	});

	it('should return a useless but functional template object', function() {
		expect(typeof tpl.render()).toBe('string');
	});

	it('should set the template source', function() {
		var tpl = new Template,
			source = '<a>source</a>';

		tpl.setSource(source);
		expect(tpl.getSource()).toEqual(source);
	});

	it('should register a processor', function() {
		var fn = function(v) {
			return v;
		};

		var re = /.+/;
		tpl.registerProcessor(re, fn);
		expect(tpl.processors[0]).toBeDefined();
		expect(tpl.processors[0].matcher).toEqual(re.source);
		expect(tpl.processors[0].fn).toBe(fn);
	});

	it('should build a basic template with interpolation', function() {
		tpl.setSource('<tpl>{someString}, {someString}</tpl>');
		tpl.registerProcessor(/[\{]{1}([\s\S]+?)[}]{1}/, function(v) {
			return v;
		});

		expect(tpl.render({
			someString: 'string'
		})).toEqual('<tpl>string, string</tpl>');
	});

	it("should build a template with evaluated code", function() {
		tpl.setSource('>>>{console.log("ok")}<<<');
		tpl.registerProcessor(/[\{]{1}([\s\S]+?)[}]{1}/);
		expect(function() {
			tpl.render();
		}).not.toThrow();
	});
});