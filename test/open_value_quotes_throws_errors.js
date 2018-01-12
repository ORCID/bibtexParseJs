import test from 'ava';
var fs = require('fs');


const bibtexParse = require('../bibtexParse');

test('throws',  
	t => {
	   const error = t.throws(() => {
		  	bibtexParse.toJSON(fs.readFileSync(__dirname + '/open_value_quotes_throws_errors.bib').toString());
	   }, TypeError);
	   t.is(error.message, 'Unterminated value: value_quotes');
});
