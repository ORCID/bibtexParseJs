bibtexParseJs
=============
A JavaScript library that parses BibTeX parser. Forked from 
[bibtex-parser](https://github.com/mikolalysenko/bibtex-parser).


## Using in Browser
Include bibtexParse.js and call 
```
bibtexParse.parse('@article{sample1,title={sample title}}');
```

## Using in [Node.js](http://nodejs.org/)
Install     ```npm install bibtexParseJs```

```
javascript
var bibliography = "@inproceedings{Lysenko:2010:GMC:1839778.1839781,\
 author = {Lysenko, Mikola and Nelaturi, Saigopal and Shapiro, Vadim},\
 title = {Group morphology with convolution algebras},\
 booktitle = {Proceedings of the 14th ACM Symposium on Solid and Physical Modeling},\
 series = {SPM '10},\
 year = {2010},\
 isbn = {978-1-60558-984-8},\
 location = {Haifa, Israel},\
 pages = {11--22},\
 numpages = {12},\
 url = {http://doi.acm.org/10.1145/1839778.1839781},\
 doi = {10.1145/1839778.1839781},\
 acmid = {1839781},\
 publisher = {ACM},\
 address = {New York, NY, USA},\
}"

var bibtexParse = require('./bibtexParse');

console.log(bibtexParse.parse((bibliography))
``` 

**Returns** A parsed bibtex file as a JSON object

```
{ 'LYSENKO:2010:GMC:1839778.1839781': 
   { entryType: 'INPROCEEDINGS',
     AUTHOR: 'Lysenko, Mikola and Nelaturi, Saigopal and Shapiro, Vadim',
     TITLE: 'Group morphology with convolution algebras',
     BOOKTITLE: 'Proceedings of the 14th ACM Symposium on Solid and Physical Modeling',
     SERIES: 'SPM \'10',
     YEAR: '2010',
     ISBN: '978-1-60558-984-8',
     LOCATION: 'Haifa, Israel',
     PAGES: '11--22',
     NUMPAGES: '12',
     URL: 'http://doi.acm.org/10.1145/1839778.1839781',
     DOI: '10.1145/1839778.1839781',
     ACMID: '1839781',
     PUBLISHER: 'ACM',
     ADDRESS: 'New York, NY, USA' } }

```

## Contributing
   Contributions are welcome. Please make sure the unit test(runTest.js) reflects the
   changes and completes successfully. 


## Credits
(c) 2010 Henrik Muehe.  MIT License 
[visit](https://code.google.com/p/bibtex-js/)


CommonJS port maintained by Mikola Lysenko 
[visit](https://github.com/mikolalysenko/bibtex-parser)
