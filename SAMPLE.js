var bibtexParse = require('bibtex-parse-js');

var sample = bibtexParse.toJSON('@article{sample1,title={sample title}}');

/*
# Will console log:
# 
# [ { citationKey: 'SAMPLE1',
#     entryType: 'ARTICLE',
#     entryTags: { TITLE: 'sample title' } } ]
#
*/
console.log(sample);
