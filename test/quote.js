import test from 'ava';

const bibtexParse = require('../bibtexParse');

const input = `
  @article{sample1,
     title={sample \"Quote\" title},
     name={sample "Quote" title"}
  }
`;

const output = [{citationKey:"sample1",entryType:"article",entryTags: {title:"sample \"Quote\" title",name:"sample \"Quote\" title\""}}]

test('Quote should work', t => t.deepEqual(output, bibtexParse.toJSON(input)));
