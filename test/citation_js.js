import test from 'ava';

const bibtexParse = require('../bibtexParse');

const input = `
	<script>console.log('attack!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');</script>
`;


test('Should prevent XSS', t => t.throws(bibtexParse.toJSON.bind(input)));
