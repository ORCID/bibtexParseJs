import test from 'ava';

const bibtexParse = require('../bibtexParse');

const input = `@proceedings{Last:2020:P20I3,
  doi = {10.22152/programming-journal.org/2020/4/issue3},
  editor = {Last, First},
  month = {February},
  publisher = {AOSA Inc.},
  title = {The Art, Science, and Engineering of Programming},
  url = {https://programming-journal.org/2020/4/issue3/},
  volume = 4,
  year = 2020
}`

const output = [ { citationKey: 'Last:2020:P20I3',
    entryType: 'proceedings',
    entryTags:
     { title: 'The Art, Science, and Engineering of Programming',
       year: '2020',
       month: 'February',
       editor: 'Last, First',
       publisher: 'AOSA Inc.',
       volume: '4',
       doi: '10.22152/programming-journal.org/2020/4/issue3',
       url: 'https://programming-journal.org/2020/4/issue3/' } } ]

test('proceedings should parse', t => t.deepEqual(output, bibtexParse.toJSON(input)));
