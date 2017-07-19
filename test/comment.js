import test from 'ava';

const bibtexParse = require('../bibtexParse');

const input = `
	@PREAMBLE{"\newcommand{\noopsort}[1]{}"}

	@COMMENT{"\nslkdjflksdjflkdsjf"}

	% test
`;

const output = [ { entryType: 'PREAMBLE', entry: '"ewcommand{oopsort}[1]{}"' },
  { entryType: 'COMMENT', entry: '"slkdjflksdjflkdsjf"' } ]

test('Should parse comment', t => t.deepEqual(output, bibtexParse.toJSON(input)));
