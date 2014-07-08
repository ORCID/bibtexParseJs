var assert = require('assert'),
    fs = require('fs'),
    bibtexParse = require('../bibtexParse');

console.log('starting test');
var file = 'commentTest.bib';

console.log(file)
console.log('-----------------------------------------------');
var bibTexStr = fs.readFileSync('./test/good/' + file, 'utf8');
console.log(bibTexStr);

var bibTexJson = bibtexParse.toJSON(bibTexStr);
console.log(bibTexJson);
assert(Object.keys(bibTexJson).length > 0);

var bibTexJson2 = bibtexParse.toJSON(bibtexParse.toBibtex(bibTexJson));
console.log(bibTexJson2);

assert.equal(JSON.stringify(bibTexJson),JSON.stringify(bibTexJson2));

console.log();
console.log();
