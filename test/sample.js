import test from 'ava';
var fs = require('fs');

const bibtexParse = require('../bibtexParse');

const output = [{citationKey:"sample1",entryType:"article",entryTags: {title:"sample title"}}]

test('Sample test', 
	t => t.deepEqual(
		output, bibtexParse.toJSON(fs.readFileSync(__dirname + '/sample.bib').toString()))
);
