var assert = require('assert'), 
   fs = require('fs'),
   bibtexParse = require('./bibtexParse');


var goodFiles = fs.readdirSync('./test/good');
goodFiles.forEach(function(file){ 
    console.log(file + '-----------------------------------------------');
    var bibTexStr = fs.readFileSync('./test/good/'+file,'utf8');
    console.log(bibTexStr);

    var bibTexJson = bibtexParse.parse(bibTexStr);
    console.log(bibTexJson);
    assert(Object.keys(bibTexJson).length > 0);
    console.log();
    console.log();
});

var badFiles = fs.readdirSync('./test/bad');
badFiles.forEach(function(file){ 
    console.log(file + '-----------------------------------------------');
    var bibTexStr = fs.readFileSync('./test/bad/'+file,'utf8');
    console.log(bibTexStr);

    try {
        var bibTexJson = bibtexParse.parse(bibTexStr);
    } catch (err) {
        console.log('expected error ' + err);
        bibTexJson = {};
    }
    console.log(bibTexJson);
    assert(Object.keys(bibTexJson).length == 0);
    console.log();
    console.log();
});

console.log("test complete");


