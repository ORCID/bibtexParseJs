import test from 'ava';

const bibtexParse = require('../bibtexParse');

const input = `
	fsdfasdfsadfsdafasdfsdafdsa
`;


test('Should not parse junk', t => t.throws(bibtexParse.toJSON.bind(input)));
