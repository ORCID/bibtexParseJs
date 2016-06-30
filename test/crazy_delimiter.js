import test from 'ava';

const bibtexParse = require('../bibtexParse');

const input = `
	@article{RID:1118130922631-13,title = {Synthesis and structural characterization of unprecedented bis-asymmetric heteroscorpionate U(III) complexes: [U\{kappa(3)-H2B(pz(tBu),(Me))(pz(Me,tBu))\}(2)I] and [U\{kappa(3) -H2B(pz(tBu,Me))( pz(Me2))\}(2)I]},journal = {Inorganic Chemistry},year = {2003},author = {Maria, L and Domingos, A and Santos, I},volume = {42},number = {10},pages = {3323-3330}}
`;

const output = [ { citationKey: 'RID:1118130922631-13',
    entryType: 'article',
    entryTags:
     { title: 'Synthesis and structural characterization of unprecedented bis-asymmetric heteroscorpionate U(III) complexes: [U{kappa(3)-H2B(pz(tBu),(Me))(pz(Me,tBu))}(2)I] and [U{kappa(3) -H2B(pz(tBu,Me))( pz(Me2))}(2)I]',
       journal: 'Inorganic Chemistry',
       year: '2003',
       author: 'Maria, L and Domingos, A and Santos, I',
       volume: '42',
       number: '10',
       pages: '3323-3330' } } ]

test('Should handle crazy delimiter', t => t.deepEqual(output, bibtexParse.toJSON(input)));
