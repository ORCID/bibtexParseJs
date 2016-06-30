import test from 'ava';

const bibtexParse = require('../bibtexParse');

const input = `
  @article{sample1,title={\'Isample title\textregistered \~n  {\~n}}}
`;

const output = [{citationKey:"sample1",entryType:"article",entryTags: {title:"'Isample title\textregistered ~n  {~n}"}}]

test('LaTeX should parse', t => t.deepEqual(output, bibtexParse.toJSON(input)));
