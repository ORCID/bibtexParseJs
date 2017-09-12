import test from 'ava';

const bibtexParse = require('../bibtexParse');

const input = `
  @article{SomeKey,
   author     = {John Doe},
   title\t= {Foo Bar},
  journal=\t{Transactions on Foobar},
         \tvolume\t  =   {42},
\tyear \t={2017}
  }
`;

const output = [{citationKey:"SomeKey",entryType:"article",entryTags: {author:"John Doe",title:"Foo Bar",journal:"Transactions on Foobar",volume:"42",year:"2017"}}]

test('Ignore tabs and other whitespace in field keys', t => t.deepEqual(output, bibtexParse.toJSON(input)));
