var codeMap = {};

function toUnicode(theString) {
  var unicodeString = '';
  for (var i=0; i < theString.length; i++) {
    var theUnicode = theString.charCodeAt(i).toString(16).toUpperCase();
    while (theUnicode.length < 4) {
      theUnicode = '0' + theUnicode;
    }
    theUnicode = '\\u' + theUnicode;
    unicodeString += theUnicode;
  }
  //console.log(unicodeString);
  //console.log(unescape(JSON.parse('"'+unicodeString+'"')));
  return unicodeString;
}

// set used for creating outChars
var orcidLatexToUni = {
  "\\`A": { 'char': "À", 'description': 'grave'}, //test
  "\\`E": { 'char': "È", 'description': 'grave'},
  "\\`I": { 'char': "Ì", 'description': 'grave'},
  "\\`O": { 'char': "Ò", 'description': 'grave'},
  "\\`U": { 'char': "Ù", 'description': 'grave'},
  "\\`a": { 'char': "à", 'description': 'grave'},
  "\\`e": { 'char': "è", 'description': 'grave'},
  "\\`i": { 'char': "ì", 'description': 'grave'},
  "\\`o": { 'char': "ò", 'description': 'grave'},
  "\\`u": { 'char': "ù", 'description': 'grave'},
  "\\'A": { 'char': "Á", 'description': 'acute'},
  "\\'E": { 'char': "É", 'description': 'acute'},
  "\\'I": { 'char': "Í", 'description': 'acute'},
  "\\'O": { 'char': "Ó", 'description': 'acute'},
  "\\'U": { 'char': "Ú", 'description': 'acute'},
  "\\'Y": { 'char': "Ý", 'description': 'acute'},
  "\\'a": { 'char': "á", 'description': 'acute'},
  "\\'e": { 'char': "é", 'description': 'acute'},
  "\\'i": { 'char': "í", 'description': 'acute'},
  "\\'o": { 'char': "ó", 'description': 'acute'},
  "\\'u": { 'char': "ú", 'description': 'acute'},
  "\\'y": { 'char': "ý", 'description': 'acute'},
  "\\\"A": { 'char': "Ä", 'description': 'diaeresis'},
  "\\r A": { 'char': "Å", 'description': 'diaeresis'},
  "\\\"E": { 'char': "Ë", 'description': 'diaeresis'},
  "\\\"I": { 'char': "Ï", 'description': 'diaeresis'},
  "\\\"O": { 'char': "Ö", 'description': 'diaeresis'},
  "\\\"U": { 'char': "Ü", 'description': 'diaeresis'},
  "\\\"a": { 'char': "ä", 'description': 'diaeresis'},
  "\\r a": { 'char': "å", 'description': 'diaeresis'},
  "\\\"e": { 'char': "ë", 'description': 'diaeresis'},
  "\\\"i": { 'char': "ï", 'description': 'diaeresis'},
  "\\\"o": { 'char': "ö", 'description': 'diaeresis'},
  "\\\"u": { 'char': "ü", 'description': 'diaeresis'},
  "\\~A": { 'char': "Ã", 'description': 'tilde'},
  "\\~N": { 'char': "Ñ", 'description': 'tilde'},
  "\\~O": { 'char': "Õ", 'description': 'tilde'},
  "\\~a": { 'char': "ã", 'description': 'tilde'},
  "\\~n": { 'char': "ñ", 'description': 'tilde'},
  "\\~o": { 'char': "õ", 'description': 'tilde'},
  "\\rU": { 'char': "Ů", 'description': 'ring above'},
  "\\ru": { 'char': "ů", 'description': 'ring above'},
  "\\vC": { 'char': "Č", 'description': 'caron'},
  "\\vD": { 'char': "Ď", 'description': 'caron'},
  "\\vE": { 'char': "Ě", 'description': 'caron'},
  "\\vN": { 'char': "Ň", 'description': 'caron'},
  "\\vR": { 'char': "Ř", 'description': 'caron'},
  "\\vS": { 'char': "Š", 'description': 'caron'},
  "\\vT": { 'char': "Ť", 'description': 'caron'},
  "\\vZ": { 'char': "Ž", 'description': 'caron'},
  "\\vc": { 'char': "č", 'description': 'caron'},
  "\\vd": { 'char': "ď", 'description': 'caron'},
  "\\ve": { 'char': "ě", 'description': 'caron'},
  "\\vn": { 'char': "ň", 'description': 'caron'},
  "\\vr": { 'char': "ř", 'description': 'caron'},
  "\\vs": { 'char': "š", 'description': 'caron'},
  "\\vt": { 'char': "ť", 'description': 'caron'},
  "\\vz": { 'char': "ž", 'description': 'caron'},
  "\\$": { 'char': "$", 'description': ''},
  "\\\\": { 'char': "\\", 'description': ''},
  "\\{": { 'char': "{", 'description': ''},
  "\\}": { 'char': "}", 'description': ''},
  "\\textellipsis": { 'char': "…", 'description': ''},
  "\\theta": { 'char': "θ", 'description': ''},
  "\\omicron": { 'char': "ο", 'description': ''},
  "\\=A": { 'char': "Ā", 'description': ''},
  "\\=a": { 'char': "ā", 'description': ''},
  "\\k A": { 'char': "Ą", 'description': ''},
  "\\k a": { 'char': "ą", 'description': ''},
  "\\'C": { 'char': "Ć", 'description': ''},
  "\\'c": { 'char': "ć", 'description': ''},
  "\\^C": { 'char': "Ĉ", 'description': ''},
  "\\^c": { 'char': "ĉ", 'description': ''},
  "\\.C": { 'char': "Ċ", 'description': ''},
  "\\.c": { 'char': "ċ", 'description': ''},
  "\\=E": { 'char': "Ē", 'description': ''},
  "\\=e": { 'char': "ē", 'description': ''},
  "\\.E": { 'char': "Ė", 'description': ''},
  "\\.e": { 'char': "ė", 'description': ''},
  "\\k E": { 'char': "Ę", 'description': ''},
  "\\k e": { 'char': "ę", 'description': ''},
  "\\^G": { 'char': "Ĝ", 'description': ''},
  "\\^g": { 'char': "ĝ", 'description': ''},
  "\\.G": { 'char': "Ġ", 'description': ''},
  "\\.g": { 'char': "ġ", 'description': ''},
  "\\^H": { 'char': "Ĥ", 'description': ''},
  "\\^h": { 'char': "ĥ", 'description': ''},
  "\\dH": { 'char': "Ħ", 'description': ''},
  "\\~I": { 'char': "Ĩ", 'description': ''},
  "\\~i": { 'char': "ĩ", 'description': ''},
  "\\=I": { 'char': "Ī", 'description': ''},
  "\\=i": { 'char': "ī", 'description': ''},
  "\\u{i}": { 'char': "ĭ", 'description': ''},
  "\\k I": { 'char': "Į", 'description': ''},
  "\\k i": { 'char': "į", 'description': ''},
  "\\.I": { 'char': "İ", 'description': ''},
  "\\^J": { 'char': "Ĵ", 'description': ''},
  "\\^j": { 'char': "ĵ", 'description': ''},
  "\\c{J}": { 'char': "Ķ", 'description': ''},
  "\\c{j}": { 'char': "ķ", 'description': ''},
  "\\'L": { 'char': "Ĺ", 'description': ''},
  "\\'l": { 'char': "ĺ", 'description': ''},
  "\\dL": { 'char': "Ł", 'description': ''},
  "\\dl": { 'char': "ł", 'description': ''},
  "\\'N": { 'char': "Ń", 'description': ''},
  "\\'n": { 'char': "ń", 'description': ''},
  "\\=O": { 'char': "Ō", 'description': ''},
  "\\=o": { 'char': "ō", 'description': ''},
  "\\'R": { 'char': "Ś", 'description': ''},
  "\\'r": { 'char': "ś", 'description': ''},
  "\\^S": { 'char': "Ŝ", 'description': ''},
  "\\^s": { 'char': "ŝ", 'description': ''},
  "\\dT": { 'char': "Ŧ", 'description': ''},
  "\\dt": { 'char': "ŧ", 'description': ''},
  "\\~U": { 'char': "Ũ", 'description': ''},
  "\\~u": { 'char': "ũ", 'description': ''},
  "\\=U": { 'char': "Ū", 'description': ''},
  "\\=u": { 'char': "ū", 'description': ''},
  "\\r U": { 'char': "Ů", 'description': ''},
  "\\r u": { 'char': "ů", 'description': ''},
  "\\k U": { 'char': "Ų", 'description': ''},
  "\\k u": { 'char': "ų", 'description': ''},
  "\\^W": { 'char': "Ŵ", 'description': ''},
  "\\^w": { 'char': "ŵ", 'description': ''},
  "\\^Y": { 'char': "Ŷ", 'description': ''},
  "\\^y": { 'char': "ŷ", 'description': ''},
  "\\\"Y": { 'char': "Ÿ", 'description': ''},
  "\\'Z": { 'char': "Ź", 'description': ''},
  "\\'z": { 'char': "ź", 'description': ''},
  "\\.Z": { 'char': "Ż", 'description': ''},
  "\\.z": { 'char': "ż", 'description': ''}
};

// make 
for (key in orcidLatexToUni) {
    codeMap[key] = {
      'char': orcidLatexToUni[key]['char'],
      'code': toUnicode(orcidLatexToUni[key]['char']),
      'dec': orcidLatexToUni[key]['char'].charCodeAt(0),
      'description': orcidLatexToUni[key].description
    }
  //console.log(codeMap[key]['code'] + " " + codeMap[key]['char']);
  //console.log(unescape(JSON.parse('"'+codeMap[key]['code']+'"')));

}

var strOut = JSON.stringify(codeMap, false, 2);
console.log(strOut);
