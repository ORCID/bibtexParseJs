import test from 'ava';

const bibtexParse = require('../bibtexParse');

const input = `
	@techreport{2013current,
	  Author = {Lack, Kelly A.},
	  Date-Added = {2013-04-09 19:09:56 +0000},
	  Date-Modified = {2013-04-09 19:10:58 +0000},
	  Institution = {Ithaka S+R},
	  Keywords = {0sotl},
	  Oa-Url = {http://www.sr.ithaka.org/sites/default/files/reports/ithaka-sr-online-learning-postsecondary-education-may2012.pdf},
	  Title = {Current Status of Research on Online Learning in Postsecondary Education},
	  Year = {2013}}
`;

const output = [ { citationKey: '2013current',
    entryType: 'techreport',
    entryTags:
     { Author: 'Lack, Kelly A.',
       'Date-Added': '2013-04-09 19:09:56 +0000',
       'Date-Modified': '2013-04-09 19:10:58 +0000',
       Institution: 'Ithaka S+R',
       Keywords: '0sotl',
       'Oa-Url': 'http://www.sr.ithaka.org/sites/default/files/reports/ithaka-sr-online-learning-postsecondary-education-may2012.pdf',
       Title: 'Current Status of Research on Online Learning in Postsecondary Education',
       Year: '2013' } } ]

test('Should parse citation that starts with number', t => t.deepEqual(output, bibtexParse.toJSON(input)));
