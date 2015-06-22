var latexToUni = {
        "\\`A": "À", // begin grave
        "\\`E": "È",
        "\\`I": "Ì",
        "\\`O": "Ò",
        "\\`U": "Ù",
        "\\`a": "à",
        "\\`e": "è",
        "\\`i": "ì",
        "\\`o": "ò",
        "\\`u": "ù",
        "\\\'A": "Á", // begin acute
        "\\\'E": "É",
        "\\\'I": "Í",
        "\\\'O": "Ó",
        "\\\'U": "Ú",
        "\\\'Y": "Ý",
        "\\\'a": "á",
        "\\\'e": "é",
        "\\\'i": "í",
        "\\\'o": "ó",
        "\\\'u": "ú",
        "\\\'y": "ý",
        "\\\"A": "Ä", // begin diaeresis
        "\\r A": "Å",
        "\\\"E": "Ë",
        "\\\"I": "Ï",
        "\\\"O": "Ö",
        "\\\"U": "Ü",
        "\\\"a": "ä",
        "\\r a": "å",
        "\\\"e": "ë",
        "\\\"i": "ï",
        "\\\"o": "ö",
        "\\\"u": "ü",
        "\\~A": "Ã", // begin tilde
        "\\~N": "Ñ",
        "\\~O": "Õ",
        "\\~a": "ã",
        "\\~n": "ñ",
        "\\~o": "õ",
        "\\rU": "Ů", // begin ring above
        "\\ru": "ů",
        "\\vC": "Č",  // begin caron
        "\\vD": "Ď",
        "\\vE": "Ě",
        "\\vN": "Ň",
        "\\vR": "Ř",
        "\\vS": "Š",
        "\\vT": "Ť",
        "\\vZ": "Ž",
        "\\vc": "č",
        "\\vd": "ď",
        "\\ve": "ě",
        "\\vn": "ň",
        "\\vr": "ř",
        "\\vs": "š",
        "\\vt": "ť",
        "\\vz": "ž",
        "\\#": "#",  // begin special symbols
        "\\$": "$",
        "\\%": "%",
        "\\&": "&",
        "\\\\": "\\",
        "\\^": "^",
        "\\_": "_",
        "\\{": "{",
        "\\}": "}",
        "\\~": "~",
        "\\\"": "\"",
        "\\\'": "’", // closing single quote
        "\\`": "‘", // opening single quote
        "\\AA": "Å", // begin non-ASCII letters
        "\\AE": "Æ",
        "\\c{C}": "Ç",
        "\\O": "Ø",
        "\\aa": "å",
        "\\c{c}": "ç",
        "\\ae": "æ",
        "\\o": "ø",
        "\\ss": "ß",
        "\\textcopyright": "©",
        "\\textellipsis": "…" ,
        "\\textemdash": "—",
        "\\textendash": "–",
        "\\textregistered": "®",
        "\\texttrademark": "™",
        "\\alpha": "α", // begin greek alphabet
        "\\beta": "β",
        "\\gamma": "γ",
        "\\delta": "δ",
        "\\epsilon": "ε",
        "\\zeta": "ζ",
        "\\eta": "η",
        "\\theta": "θ",
        "\\iota": "ι",
        "\\kappa": "κ",
        "\\lambda": "λ",
        "\\mu": "μ",
        "\\nu": "ν",
        "\\xi": "ξ",
        "\\omicron": "ο",
        "\\pi": "π",
        "\\rho": "ρ",
        "\\sigma": "ς",
        "\\tau": "σ",
        "\\upsilon": "τ",
        "\\phi": "υ",
        "\\chi": "φ",
        "\\psi": "χ",
        "\\omega": "ψ",
        "\\=A": "Ā",
        "\\=a": "ā",
        "\\u{A}": "Ă",
        "\\u{a}": "ă",
        "\\k A": "Ą",
        "\\k a": "ą",
        "\\'C": "Ć",
        "\\'c": "ć",
        "\\^C": "Ĉ",
        "\\^c": "ĉ",
        "\\.C": "Ċ",
        "\\.c": "ċ",
        "\\v{C}": "Č",
        "\\v{c}": "č",
        "\\v{D}": "Ď",
        "\\=E": "Ē",
        "\\=e": "ē",
        "\\u{E}": "Ĕ",
        "\\u{e}": "ĕ",
        "\\.E": "Ė",
        "\\.e": "ė",
        "\\k E": "Ę",
        "\\k e": "ę",
        "\\v{E}": "Ě",
        "\\v{e}": "ě",
        "\\^G": "Ĝ",
        "\\^g": "ĝ",
        "\\u{G}": "Ğ",
        "\\u{g}": "ğ",
        "\\.G": "Ġ",
        "\\.g": "ġ",
        "\\c{G}": "Ģ",
        "\\c{g}": "ģ",
        "\\^H": "Ĥ",
        "\\^h": "ĥ",
        "\\dH": "Ħ",
        "\\dh": "ħ",
        "\\~I": "Ĩ",
        "\\~i": "ĩ",
        "\\=I": "Ī",
        "\\=i": "ī",
        "\\u{I}": "Ĭ",
        "\\u{i}": "ĭ",
        "\\k I": "Į",
        "\\k i": "į",
        "\\.I": "İ",
        "\\^J": "Ĵ",
        "\\^j": "ĵ",
        "\\c{J}": "Ķ",
        "\\c{j}": "ķ",
        "\\'L": "Ĺ",
        "\\'l": "ĺ",
        "\\c{L}": "Ļ",
        "\\c{l}": "ļ",
        "\\v{L}": "Ľ",
        "\\v{l}": "ľ",
        "\\dL": "Ł",
        "\\dl": "ł",
        "\\'N": "Ń",
        "\\'n": "ń",
        "\\c{N}": "Ņ",
        "\\c{n}": "ņ",
        "\\v{N}": "Ň",
        "\\v{n}": "ň",
        "\\=O": "Ō",
        "\\=o": "ō",
        "\\u{O}": "Ŏ",
        "\\u{o}": "ŏ",
        "\\H{O}": "Ő",
        "\\H{o}": "ő",
        "\\OE": "Œ",
        "\\oe": "œ",
        "\\'R": "Ŕ",
        "\\'r": "ŕ",
        "\\c{R}": "Ŗ",
        "\\c{r}": "ŗ",
        "\\v{R}": "Ř",
        "\\v{r}": "ř",
        "\\'R": "Ś",
        "\\'r": "ś",
        "\\^S": "Ŝ",
        "\\^s": "ŝ",
        "\\c{S}": "Ş",
        "\\c{s}": "ş",
        "\\v{S}": "Š",
        "\\v{s}": "š",
        "\\c{T}": "Ţ",
        "\\c{t}": "ţ",
        "\\v{T}": "Ť",
        "\\v{t}": "ť",
        "\\dT": "Ŧ",
        "\\dt": "ŧ",
        "\\~U": "Ũ",
        "\\~u": "ũ",
        "\\=U": "Ū",
        "\\=u": "ū",
        "\\u{U}": "Ŭ",
        "\\u{u}": "ŭ",
        "\\r U": "Ů",
        "\\r u": "ů",
        "\\H{U}": "Ű",
        "\\H{u}": "ű",
        "\\k U": "Ų",
        "\\k u": "ų",
        "\\^W": "Ŵ",
        "\\^w": "ŵ",
        "\\^Y": "Ŷ",
        "\\^y": "ŷ",
        "\\\"Y": "Ÿ",
        "\\'Z": "Ź",
        "\\'z": "ź",
        "\\.Z": "Ż",
        "\\.z": "ż",
        "\\v{Z}": "Ž",
        "\\v{z}": "ž"
};

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
            var latexCode = String(cur.latex).trim();
            if (String(latexCode).charAt(0) == "\\") {
                // don't add if we already have a key
                if (!outChars[latexCode]) {
                   if (latexToUni[latexCode]) delete latexToUni[latexCode];
                   outChars[latexCode] = {
                   'code': cur['$'].id,
                   'char': unescape(JSON.parse('"'+cur['$'].id.replace('U','\\u')+'"'))
                   }
                }
            }
          }
        }
      });
      console.log("File '" + filePath + "/ was successfully read.\n");
      console.log(JSON.stringify(outChars, false, 2));
      //console.log(JSON.stringify(latexToUni, false, 2));
      return JSON.stringify(outChars, false, 2);
    } catch (ex) {console.log(ex)}
  }
}();
