bibtexParseJs
=============
A JavaScript library that parses BibTeX parser. Forked from 
[bibtex-parser](https://github.com/mikolalysenko/bibtex-parser).


## Using in Browser
Include bibtexParse.js and call 

```
bibtexParse.toJSON('@article{sample1,title={sample title}}');
```

## Using in [Node.js](http://nodejs.org/)

(Note: prior to v0.0.25, bibtex-parser-js was an uncoped package in npm. From v0.0.25 onwards it is published under the @orcid organization.)

Install     ```npm install @orcid/bibtex-parse-js```

```
var bibtexParse = require('@orcid/bibtex-parse-js');

var sample = bibtexParse.toJSON('@article{sample1,title={sample title}}');

console.log(sample);
``` 

**Returns** A parsed bibtex file as a JSON Array Object

```
[ { citationKey: 'SAMPLE1',
    entryType: 'ARTICLE',
    entryTags: { TITLE: 'sample title' } } ]
```

## Contributing
   Contributions are welcome. Please make sure the unit test(test/runTest.js) reflects the
   changes and completes successfully. 

#### Travis CI
See the latest build and results at [https://travis-ci.org/ORCID/bibtexParseJs](https://travis-ci.org/ORCID/bibtexParseJs)

## Credits
(c) 2010 Henrik Muehe.  MIT License 
[visit](https://code.google.com/p/bibtex-js/)


CommonJS port maintained by Mikola Lysenko 
[visit](https://github.com/mikolalysenko/bibtex-parser)

