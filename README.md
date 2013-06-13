# Generic Javascript templating module

It does nothing useful out-of-box. It's meant to be used as a generic renderer.
You need to register some RegExp matchers to actually run templates.

```
var tpl = new Template('>> {{date}} :: {[console.log("ok")]}');

// register a matcher to interpolate data
tpl.registerProcessor(/\{\{([\s\S]+?)\}\}/, function(value) {
	return value.toString();
});

// register a matcher that will be evaluated as code
tpl.registerProcessor(/\{\[([\s\S]+?)\]\}/);

var result = tpl.render({
	date: new Date()
});

```
**registerProcessor(matcher, fn)**
Registers a new processor

matcher: RegExp or RegExp string
processor: a function to evaluate and return a string

If processor is omitted, the matched string will be evaluated instead

**render(data, scope)**

data: JSON with data to render
scope: the object to use as scope into template function (optional)