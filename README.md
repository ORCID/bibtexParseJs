bibtex-parser
=============
A pure JavaScript BibTeX parser.  Based on the following implementation by Henrik Muehe:

* https://code.google.com/p/bibtex-js/

## Example

```javascript
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

var parse = require("bibtex-parser")

console.log(parse(bibliography))
```

## Install

    npm install bibtex-parser
    
## API

```javascript
var parse = require("bibtex-parser")
```

### `parse(input)`
Parses a string as a bibtex file.  The result is an object whose properties are the entries of the bibtex file, and whose values are objects with contents of the bibtex file.

* `input` is a string representing a bibtex file

**Returns** A parsed bibtex file as a JSON object

## Credits
(c) 2010 Henrik Muehe.  MIT License

CommonJS port maintained by Mikola Lysenko
