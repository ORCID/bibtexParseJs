import test from 'ava';

const bibtexParse = require('../bibtexParse');

const input = ``;


test('Blank citation should not parse', t => t.throws(bibtexParse.toJSON.bind(input)));
