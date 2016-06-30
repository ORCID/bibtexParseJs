import test from 'ava';

const bibtexParse = require('../bibtexParse');

const input = `
	@book{book,
		author={Peter Babington}, 
		title ={The title of the work},
		publisher = {The name of the publisher},
		year={1993},
		volume=4,
		series=10,
		address ={The address},
		edition =3,
		month =7,
		note={An optional note},
		isbn={3257227892}
	}
`;

const output = [ { citationKey: 'book',
    entryType: 'book',
    entryTags:
     { author: 'Peter Babington',
       title: 'The title of the work',
       publisher: 'The name of the publisher',
       year: '1993',
       volume: '4',
       series: '10',
       address: 'The address',
       edition: '3',
       month: '7',
       note: 'An optional note',
       isbn: '3257227892' } } ]

test('Book ciation should parse', t => t.deepEqual(output, bibtexParse.toJSON(input)));
