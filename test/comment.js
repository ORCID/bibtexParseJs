import test from 'ava';

const bibtexParse = require('../bibtexParse');

const input = `
	@PREAMBLE{"\newcommand{\noopsort}[1]{}"}

	@COMMENT{"\nslkdjflksdjflkdsjf"}

	% test

	@comment{paglione2001mapping,
	  title={A Mapping Survey of the 13CO and 12CO Emission in Galaxies},
	  author={Paglione, T.A.D. and Wall, WF and Young, J.S. and Heyer, M.H. and Richard, M. and Goldstein, M. and Kaufman, Z. and Nantais, J. and Perry, G.},
	  journal={The Astrophysical Journal Supplement Series},
	  volume={135},
	  pages={183}, %test end comment out
	  year={2001},
	  %comment out ={}
	  publisher={IOP % comment middel works  test Publishing}
	}
`;

const output = [ { entryType: 'PREAMBLE', entry: '"ewcommand{oopsort}[1]{}"' },
  { entryType: 'COMMENT', entry: '"slkdjflksdjflkdsjf"' },
  { citationKey: 'paglione2001mapping',
    entryType: 'comment',
    entryTags:
     { title: 'A Mapping Survey of the 13CO and 12CO Emission in Galaxies',
       author: 'Paglione, T.A.D. and Wall, WF and Young, J.S. and Heyer, M.H. and Richard, M. and Goldstein, M. and Kaufman, Z. and Nantais, J. and Perry, G.',
       journal: 'The Astrophysical Journal Supplement Series',
       volume: '135',
       pages: '183',
       year: '2001',
       publisher: 'IOP % comment middel works  test Publishing' } } ]

test('Should parse commwnt', t => t.deepEqual(output, bibtexParse.toJSON(input)));
