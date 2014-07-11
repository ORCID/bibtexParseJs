/* start bibtexParse 0.0.12 */

//Original work by Henrik Muehe (c) 2010
//
//CommonJS port by Mikola Lysenko 2013
//
//Port to Browser lib by ORCID / RCPETERS
//
//Issues:
//no comment handling within strings
//no string concatenation
//no variable values yet
//Grammar implemented here:
//bibtex -> (string | preamble | comment | entry)*;
//string -> '@STRING' '{' key_equals_value '}';
//preamble -> '@PREAMBLE' '{' value '}';
//comment -> '@COMMENT' '{' value '}';
//entry -> '@' key '{' key ',' key_value_list '}';
//key_value_list -> key_equals_value (',' key_equals_value)*;
//key_equals_value -> key '=' value;
//value -> value_quotes | value_braces | key;
//value_quotes -> '"' .*? '"'; // not quite
//value_braces -> '{' .*? '"'; // not quite
(function(exports) {

	function BibtexParser() {
		
		this.pos = 0;
		this.input = "";
		this.entries = new Array();

		this.currentEntry = "";

		this.setInput = function(t) {
			this.input = t;
		};

		this.getEntries = function() {
			return this.entries;
		};

		this.isWhitespace = function(s) {
			return (s == ' ' || s == '\r' || s == '\t' || s == '\n');
		};

		this.match = function(s, canCommentOut) {
			if (canCommentOut == undefined || canCommentOut == null)
				canCommentOut = true;
			this.skipWhitespace(canCommentOut);
			if (this.input.substring(this.pos, this.pos + s.length) == s) {
				this.pos += s.length;
			} else {
				throw "Token mismatch, expected " + s + ", found "
						+ this.input.substring(this.pos);
			};
			this.skipWhitespace(canCommentOut);
		};

		this.tryMatch = function(s, canCommentOut) {
			if (canCommentOut == undefined || canCommentOut == null)
				canComment = true;
			this.skipWhitespace(canCommentOut);
			if (this.input.substring(this.pos, this.pos + s.length) == s) {
				return true;
			} else {
				return false;
			};
			this.skipWhitespace(canCommentOut);
		};

		/* when search for a match all text can be ignored, not just white space */
		this.matchAt = function() {
			while (this.input.length > this.pos && this.input[this.pos] != '@') {
				this.pos++;
			};

			if (this.input[this.pos] == '@') {
				return true;
			};
			return false;
		};

		this.skipWhitespace = function(canCommentOut) {
			while (this.isWhitespace(this.input[this.pos])) {
				this.pos++;
			};
			if (this.input[this.pos] == "%" && canCommentOut == true) {
				while (this.input[this.pos] != "\n") {
					this.pos++;
				};
				this.skipWhitespace(canCommentOut);
			};
		};

		this.value_braces = function() {
			var bracecount = 0;
			this.match("{", false);
			var start = this.pos;
			var escaped = false;
			while (true) {
			    if (!escaped) {
				    if (this.input[this.pos] == '}') {
					    if (bracecount > 0) {
						    bracecount--;
					    } else {
						    var end = this.pos;
						    this.match("}", false);
						    return this.input.substring(start, end);
					    };
				    } else if (this.input[this.pos] == '{') {
					    bracecount++;
				    } else if (this.pos >= this.input.length - 1) {
					    throw "Unterminated value";
				    };
				};
			    if (this.input[this.pos] == '\\' && escaped == false) 
			       escaped == true;
			    else 
			       escaped == false;
				this.pos++;
			};
		};

		this.value_comment = function() {
			var str = '';
			var brcktCnt = 0;
			while (!(this.tryMatch("}", false) && brcktCnt == 0)) {
				str = str + this.input[this.pos];
				if (this.input[this.pos] == '{')
					brcktCnt++;
				if (this.input[this.pos] == '}')
					brcktCnt--;
				if (this.pos >= this.input.length - 1) {
					throw "Unterminated value:" + this.input.substring(start);
				};
				this.pos++;
			};
			return str;
		};

		this.value_quotes = function() {
			this.match('"', false);
			var start = this.pos;
			var escaped = false;
			while (true) {
			    if (!escaped) {
				    if (this.input[this.pos] == '"') {
					    var end = this.pos;
					    this.match('"', false);
					    return this.input.substring(start, end);
				    } else if (this.pos >= this.input.length - 1) {
					    throw "Unterminated value:" + this.input.substring(start);
				    };
				}
			    if (this.input[this.pos] == '\\' && escaped == false) 
			       escaped == true;
			    else 
			       escaped == false;
				this.pos++;
			};
		};

		this.single_value = function() {
			var start = this.pos;
			if (this.tryMatch("{")) {
				return this.value_braces();
			} else if (this.tryMatch('"')) {
				return this.value_quotes();
			} else {
				var k = this.key();
				if (k.match("^[0-9]+$")) {
					return k;
				} else {
					throw "Value expected:" + this.input.substring(start);
				};
			};
		};

		this.value = function() {
			var values = [];
			values.push(this.single_value());
			while (this.tryMatch("#")) {
				this.match("#");
				values.push(this.single_value());
			};
			return latexToUTF8.decodeLatex(values.join(""));
		};

		this.key = function() {
			var start = this.pos;
			while (true) {
				if (this.pos >= this.input.length) {
					throw "Runaway key";
				}
				;

				if (this.input[this.pos].match("[a-zA-Z0-9+_:\\./-]")) {
					this.pos++;
				} else {
					return this.input.substring(start, this.pos);
				};
			};
		};

		this.key_equals_value = function() {
			var key = this.key();
			if (this.tryMatch("=")) {
				this.match("=");
				var val = this.value();
				return [ key, val ];
			} else {
				throw "... = value expected, equals sign missing:"
						+ this.input.substring(this.pos);
			};
		};

		this.key_value_list = function() {
			var kv = this.key_equals_value();
			this.currentEntry['entryTags'] = {};
			this.currentEntry['entryTags'][kv[0]] = kv[1];
			while (this.tryMatch(",")) {
				this.match(",");
				// fixes problems with commas at the end of a list
				if (this.tryMatch("}")) {
					break;
				}
				;
				kv = this.key_equals_value();
				this.currentEntry['entryTags'][kv[0]] = kv[1];
			};
		};

		this.entry_body = function(d) {
			this.currentEntry = {};
			this.currentEntry['citationKey'] = this.key();
			this.currentEntry['entryType'] = d.substring(1);
			this.match(",");
			this.key_value_list();
			this.entries.push(this.currentEntry);
		};

		this.directive = function() {
			this.match("@");
			return "@" + this.key();
		};

		this.preamble = function() {
			this.currentEntry = {};
			this.currentEntry['entryType'] = 'PREAMBLE';
			this.currentEntry['entry'] = this.value_comment();
			this.entries.push(this.currentEntry);
		};

		this.comment = function() {
			this.currentEntry = {};
			this.currentEntry['entryType'] = 'COMMENT';
			this.currentEntry['entry'] = this.value_comment();
			this.entries.push(this.currentEntry);
		};

		this.entry = function(d) {
			this.entry_body(d);
		};

		this.bibtex = function() {
			while (this.matchAt()) {
				var d = this.directive();
				this.match("{");
				if (d == "@STRING") {
					this.string();
				} else if (d == "@PREAMBLE") {
					this.preamble();
				} else if (d == "@COMMENT") {
					this.comment();
				} else {
					this.entry(d);
				}
				this.match("}");
			};
		};
	};
	
	function LatexToUTF8 () {
	   this.uniToLatex = {
		};
		
		
		this.latexToUni = {
       "`A": "À", // begin grave
       "`E": "È",
       "`I": "Ì",
       "`O": "Ò",
       "`U": "Ù",
       "`a": "à",
       "`e": "è",
       "`i": "ì",
       "`o": "ò",
       "`u": "ù",
       "\'A": "Á", // begin acute
       "\'E": "É",
       "\'I": "Í",
       "\'O": "Ó",
       "\'U": "Ú",
       "\'Y": "Ý",
       "\'a": "á",
       "\'e": "é",
       "\'i": "í",
       "\'o": "ó",
       "\'u": "ú",
       "\'y": "ý",
       "\"A": "Ä", // begin diaeresis
       "\"E": "Ë",
       "\"I": "Ï",
       "\"O": "Ö",
       "\"U": "Ü",
       "\"a": "ä",
       "\"e": "ë",
       "\"i": "ï",
       "\"o": "ö",
       "\"u": "ü",
       "~A": "Ã", // begin tilde
       "~N": "Ñ",
       "~O": "Õ",
       "~a": "ã",
       "~n": "ñ",
       "~o": "õ",
       "rU": "Ů", // begin ring above
       "ru": "ů",
       "vC": "Č",  // begin caron
       "vD": "Ď",
       "vE": "Ě",
       "vN": "Ň",
       "vR": "Ř",
       "vS": "Š",
       "vT": "Ť",
       "vZ": "Ž",
       "vc": "č",
       "vd": "ď",
       "ve": "ě",
       "vn": "ň",
       "vr": "ř",
       "vs": "š",
       "vt": "ť",
       "vz": "ž",
       "#": "#",  // begin special symbols
       "$": "$",
       "%": "%",
       "&": "&",
       "\\": "\\",
       "^": "^",
       "_": "_",
       "{": "{",
       "}": "}",
       "~": "~",
       "\"": "\"",
       "\'": "’", // closing single quote
       "`": "‘", // opening single quote
       "AA": "Å", // begin non-ASCII letters
       "AE": "Æ",
       "O": "Ø",
       "aa": "å",
       "ae": "æ",
       "o": "ø",
       "ss": "ß",
       "textcopyright": "©",
       "textellipsis": "…" ,
       "textemdash": "—",
       "textendash": "–",
       "textregistered": "®",
       "texttrademark": "™",
       "alpha": "α", // begin greek alphabet
       "beta": "β",
       "gamma": "γ",
       "delta": "δ",
       "epsilon": "ε",
       "zeta": "ζ",
       "eta": "η",
       "theta": "θ",
       "iota": "ι",
       "kappa": "κ",
       "lambda": "λ",
       "mu": "μ",
       "nu": "ν",
       "xi": "ξ",
       "omicron": "ο",
       "pi": "π",
       "rho": "ρ",
       "sigma": "ς",
       "tau": "σ",
       "upsilon": "τ",
       "phi": "υ",
       "chi": "φ",
       "psi": "χ",
       "omega": "ψ",
        };

       String.prototype.addSlashes = function() { 
             //no need to do (str+'') anymore because 'this' can only be a string
             return this.replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
       }

		for (var idx in this.latexToUni) {
		   if (this.latexToUni[idx].length > this.maxLatexLength) 
		      this.maxLatexLength =  this.latexToUni[idx].length;
		   this.uniToLatex[this.latexToUni[idx]] = idx;
           //console.log('"'+ idx.addSlashes() + '": "' + this.latexToUni[idx].addSlashes() + '"');
           //console.log(idx.addSlashes() + ' ' + this.latexToUni[idx].addSlashes());
		}

		this.longestEscapeMatch = function(value, pos) {
           var subStringEnd =  pos + 1 + this.maxLatexLength <= value.length ? 
		               pos + 1 + this.maxLatexLength : value.length;
		   var subStr =  value.substring(pos + 1,subStringEnd);		            
		   while (subStr.length > 0) {
		     if (subStr in this.latexToUni) {
                break;
		     }
		     subStr = subStr.substring(0,subStr.length -1);
		   }
		   return subStr;
		}
		
		this.decodeLatex = function(value) {
		   var newVal = '';
		   var pos = 0;
		   while (pos < value.length) {
                if (value[pos] == '\\') {
                    var match = this.longestEscapeMatch(value, pos);
                    if (match.length > 0) {
                       newVal += this.latexToUni[match];
                       pos = pos + 1 + match.length;
                    } else {
                       newVal += value[pos];
		               pos++;
                    }
               } else if (value[pos] == '{' || value[pos] == '}') {
		          pos++;
		        } else {
		           newVal += value[pos];
		           pos++;
		        } 
		   }
		   return newVal;
		}

		this.encodeLatex = function(value) {
		   var trans = '';
		   for (var idx = 0; idx < value.length; ++idx) {
		        var c = value.charAt(idx); 
		        if (c in this.uniToLatex)
		            trans += '\\' + this.uniToLatex[c];
		        else 
		           trans += c;
		   }
		   return trans;
		}
		
	};
	
	var latexToUTF8 = new LatexToUTF8();
	
	exports.toJSON = function(bibtex) {
		var b = new BibtexParser();
		b.setInput(bibtex);
		b.bibtex();
		return b.entries;
	};

	/* added during hackathon don't hate on me */
	exports.toBibtex = function(json) {
		out = '';
		for ( var i in json) {
			out += "@" + json[i].entryType;
			out += '{';
			if (json[i].citationKey)
				out += json[i].citationKey + ', ';
			if (json[i].entry)
				out += json[i].entry ;
			if (json[i].entryTags) {
				var tags = '';
				for (jdx in json[i].entryTags) {
					if (tags.length != 0)
						tags += ', ';
					tags += jdx + '= {' + latexToUTF8.encodeLatex(json[i].entryTags[jdx]) + '}';
				}
				out += tags;
			}
			out += '}\n\n';
		}
		console.log(out);
		return out;
		
	};

})(typeof exports === 'undefined' ? this['bibtexParse'] = {} : exports);

/* end bibtexParse */
