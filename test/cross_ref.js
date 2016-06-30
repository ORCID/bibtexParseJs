import test from 'ava';

const bibtexParse = require('../bibtexParse');

const input = `
  @article{Peters_2004, title={Bibtex from CrossRef}, ISSN={0263-9475}, url={http://dx.doi.org/10.2307/25564177}, DOI={10.2307/25564177}, number={109}, journal={Circa}, publisher={JSTOR}, author={Peters, Robert}, year={2004}, pages={24}}
`;

const output = [{citationKey:"Peters_2004",entryType:"article",entryTags: {title:"Bibtex from CrossRef",ISSN:"0263-9475",url:"http://dx.doi.org/10.2307/25564177",DOI:"10.2307/25564177",number:"109",journal:"Circa",publisher:"JSTOR",author:"Peters, Robert",year:"2004",pages:"24"}}]

test('CrossRef should parse', t => t.deepEqual(output, bibtexParse.toJSON(input)));
