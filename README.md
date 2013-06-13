# Javascript Sample lib

Are you ready to fork and start coding? Good!

### Here's what you need:

- node 0.8+ (try nvm)
- [grunt 0.4+](http://gruntjs.com/ "GruntJS")

### How to write and publish
**Install:**
- edit **package.json** (module name, your name/email, git repo...)
- run `npm install` to download grunt and some plugins

**Code:**
- write the module source into **/src/.../**
- edit the file banner in **/src/banner.txt**
- write some tests into **/test/.../**
- edit **index.js** (to expose the right things)
- edit **README.md** as well
- check the code in **/src/$suffix.js** to expose your module stuff into exports variable
- run `grunt build`

**Extras:**
- run `npm publish` (optional, to publish as a node module to npm)
