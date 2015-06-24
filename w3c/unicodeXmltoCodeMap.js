var fs = require('fs'),
    xml2js = require('xml2js');

// start with orcid map
var codeMap = {
};

function getW3CXMLAsJson () {
    var fileData = fs.readFileSync("unicode.xml", 'ascii');
    var xmlParser = new xml2js.Parser();
    var xmlAsJson = null;
    xmlParser.parseString(fileData.substring(0, fileData.length), function (err, result) {
       xmlAsJson = result; 
    });
    return xmlAsJson;
}


var w3cJsonDoc = getW3CXMLAsJson();

for (var i = 0; i < w3cJsonDoc.unicode.charlist[0].character.length; i++) {
  var cur = w3cJsonDoc.unicode.charlist[0].character[i];
  if (cur.latex !==undefined) {
    var latexCode = String(cur.latex).trim();
    if (String(latexCode).charAt(0) == "\\") {
      // don't add if we already have a key
      if (!codeMap[latexCode]) {
          // don't know how to deal with decimal codes with dashes
          if (cur['$'].dec.indexOf('-') == -1) {
            var unicode = cur['$'].id;
            var dec = cur['$'].dec;
            //console.log(String.fromCodePoint(dec))
            // Javascript doesn't take unicodes 6 digits long with leading zeros
            if (unicode.indexOf('U0') > -1) unicode = unicode.replace('U0','U'); 
            codeMap[latexCode] = {
            //'char': unescape(JSON.parse('"'+cur['$'].id.replace('U','\\u')+'"')),
            'char': String.fromCodePoint(dec),
            'dec': dec,
            'code': unicode.replace('U','\\u'),
            'description': cur.description[0]['_']
          }
        }
      } else {
        //console.log("Duplicate latex code: " + latexCode);
      }
    }
  }
}

//console.log(JSON.stringify(codeMap, false,2));

var latexToUni = {};
var uniToLatix = {};
for (var key in codeMap) {
  if (latexToUni[key])
    console.log("latexToUni collision on key: " + key + " char: " + codeMap[key]['char']);
  if (uniToLatix[codeMap[key]['char']])
    console.log("uniToLatix collision on key: " + codeMap[key]['char'] + " latex: "  + uniToLatix[codeMap[key]['char']] + '');
      latexToUni[key] = codeMap[key]['char'];
  latexToUni[key] = codeMap[key]['char'];
  uniToLatix[codeMap[key]['char']] = key;
}

console.log("// Generated from http://www.w3.org/2003/entities/2007xml/unicode.xml");
console.log("// Duplicate latex keys skipped (first choosen) ");
console.log("// Duplicate latex keys not starting with backwardslash (\\) skipped");
console.log("// Decimal Charcode with dashes (-) skipped ");
console.log("var w3cLatexCharMap = " + JSON.stringify(latexToUni, false, 2));
