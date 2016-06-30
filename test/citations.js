import test from 'ava';

const bibtexParse = require('../bibtexParse');

const input = `
  @article{sample1,title={sample title}}
`;

const output = [ { citationKey: 'sample1',
    entryType: 'article',
    entryTags: { title: 'sample title' } } ]

test('Should parse citation', t => t.deepEqual(output, bibtexParse.toJSON(input)));
