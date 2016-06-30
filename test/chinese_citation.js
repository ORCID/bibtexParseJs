import test from 'ava';

const bibtexParse = require('../bibtexParse');

const input = `
	@article{羊憶蓉1999人的素質提昇之重要性,
	  title={人的素質提昇之重要性--建立在法治精神之上的多元主義},
	  author={羊憶蓉},
	  journal={人的素質--[人文關懷與社會實踐] 國際學術研討會論文集},
	  pages={174--180},
	  year={1999},
	  publisher={法鼓人文社會學院}
	}
`;

const output = [ { citationKey: '羊憶蓉1999人的素質提昇之重要性',
    entryType: 'article',
    entryTags:
     { title: '人的素質提昇之重要性--建立在法治精神之上的多元主義',
       author: '羊憶蓉',
       journal: '人的素質--[人文關懷與社會實踐] 國際學術研討會論文集',
       pages: '174--180',
       year: '1999',
       publisher: '法鼓人文社會學院' } } ]

test('Chinese should parse', t => t.deepEqual(output, bibtexParse.toJSON(input)));
