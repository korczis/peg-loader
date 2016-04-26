var PEG = require("peg");

/*
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author Tobias Koppers @sokra
 */
module.exports = function(content) {
    this.cacheable && this.cacheable();
    this.value = content;
    return "module.exports = " + PEG.buildParser(JSON.stringify(content));
}