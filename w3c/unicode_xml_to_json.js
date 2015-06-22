function unicodeToString(code) {
    code = cur['$'].id.replace('U','u');
    if (code)
    unescape(JSON.parse('"'+cur['$'].id.replace('U','\\u')+'"'))
}

var returnJSONResults = function() {
  var XMLPath = "unicode.xml";
  var rawJSON = loadXMLDoc(XMLPath);
    function loadXMLDoc(filePath) {
      var fs = require('fs');
      var xml2js = require('xml2js');
      var outChars = {};
      try {
        var fileData = fs.readFileSync(filePath, 'ascii');
        var parser = new xml2js.Parser();
        parser.parseString(fileData.substring(0, fileData.length), function (err, result) {
        for (var i = 0; i < result.unicode.charlist[0].character.length; i++) {
          var cur = result.unicode.charlist[0].character[i];
          if (cur.latex !==undefined) {
            console.log(cur.latex + " : " + cur.latex.charAt(0));
            // don't add if we already have a key
            if (!outChars[cur.latex]) {
               outChars[cur.latex] = {
               'code': cur['$'].id,
               'char': unescape(JSON.parse('"'+cur['$'].id.replace('U','\\u')+'"'))
               }
            }
          }
        }
      });
      console.log("File '" + filePath + "/ was successfully read.\n");
      //console.log(JSON.stringify(outChars, false, 2));
      return JSON.stringify(outChars, false, 2);
    } catch (ex) {console.log(ex)}
  }
}();
