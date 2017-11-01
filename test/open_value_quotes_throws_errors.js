import test from 'ava';

const bibtexParse = require('../bibtexParse');

const input = `
  @article{smolvcic2009dust,
	  title={The Dust-Unbiased Cosmic Star-Formation History from the 20 CM VLA-COSMOS Survey},
	  author={Smol{\v{c}}i{\'c}, V and Schinnerer, E and Zamorani, G and Bell, EF and Bondi, M and Carilli, CL and Ciliegi, P and Mobasher, B and Paglione, T and Scodeggio, M and others},
	  journal={The Astrophysical Journal},
	  volume="
`;

test('throws',  
	t => {
	   const error = t.throws(() => {
		  	bibtexParse.toJSON(input);
	   }, TypeError);
	   t.is(error.message, 'Unterminated value: value_quotes');
});
