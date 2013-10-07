var bibtexParse = require('bibtex-parse-js');

var sample = bibtexParse.toJSON('@article{sample1,title={sample title}}');

# Will conolse log:
# 
# [ { citationKey: 'SAMPLE1',
#     entryType: 'ARTICLE',
#     entryTags: { TITLE: 'sample title' } } ]
#
console.log(sample);
