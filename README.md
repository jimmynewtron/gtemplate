# Generic Javascript templating module

It does nothing useful out-of-box. It's meant to be used as a generic renderer.
You need to register some RegExp matchers to actually run templates.

```
// register a matcher to interpolate data
Template.registerProcessor(/\{\{([\s\S]+?)\}\}/, function(value) {
	return value.toString();
});

// register a matcher that will be evaluated as code
Template.registerProcessor(/\{\[([\s\S]+?)\]\}/);

var tpl = Template.create('>> {{date}} :: {[console.log("ok")]}');
var result = tpl.render({
	date: new Date()
});

```
**Template.registerProcessor(matcher, fn)**

Registers a shared processor

- matcher: RegExp or RegExp string
- processor: a function to evaluate and return a string


If processor is omitted, the matched string will be evaluated instead

**render(data, scope)**

- data: JSON with data to render
- scope: the object to use as scope into template function (optional)

**Template.create(code)**

Returns a new instance of Template using the code specified.