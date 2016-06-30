import test from 'ava';

const bibtexParse = require('../bibtexParse');

const input = `
  @Book{abramowitz+stegun,
   author    = "Milton {Abramowitz} and Irene A. {Stegun}",
   title     = "Handbook of Mathematical Functions with
                Formulas, Graphs, and Mathematical Tables",
   publisher = "Dover",
   year      =  {1964},
   address   = "New York",
   edition   = "ninth Dover printing, tenth GPO printing"
  }
`;

const output = [ { citationKey: 'abramowitz+stegun',
    entryType: 'Book',
    entryTags:
     { author: 'Milton {Abramowitz} and Irene A. {Stegun}',
       title: 'Handbook of Mathematical Functions with\n                Formulas, Graphs, and Mathematical Tables',
       publisher: 'Dover',
       year: '1964',
       address: 'New York',
       edition: 'ninth Dover printing, tenth GPO printing' } } ]

test('Wikipedia should parse', t => t.deepEqual(output, bibtexParse.toJSON(input)));
